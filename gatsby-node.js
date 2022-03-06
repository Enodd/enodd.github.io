const path = require("path");

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const slug = path.basename(node.fileAbsolutePath, ".mdx");
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('ERROR: Loading "createPages" query');
  }
  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.fields.slug}`,
      component: path.resolve(`./src/template/template.js`),
      context: { id: node.id },
    });
  });
};
