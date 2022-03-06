import React from "react";
import "./template.scss";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout/layout";
import BlogPostHero from "./postHero";
import { getImage } from "gatsby-plugin-image";
import Head from "../components/utility/head";

const shortcodes = { Link };

const BlogPost = ({ data: { mdx } }) => {
  const bannerImage = getImage(mdx.frontmatter.banner.childImageSharp);
  const postTitle = mdx.frontmatter.title;
  return (
    <>
      <Head title={postTitle} />
      <Layout contentId="postContent">
        <BlogPostHero banner={bannerImage} postTitle={postTitle} />
        <div id="postContent">
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        banner {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 500)
            original {
              src
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;
