/** @type {import('gatsby').GatsbyConfig} */

const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@data": path.resolve(__dirname, "src/data"),
        "@images": path.resolve(__dirname, "src/images"),
        "@views": path.resolve(__dirname, "src/views"),
        "@pages": path.resolve(__dirname, "src/pages"),
      },
    },
  });
};

module.exports = {
  siteMetadata: {
    title: `enodd.github.io`,
    siteUrl: `https://www.enodd.github.io/`,
    author: `Damian Nowak`,
    authorNickname: `Enodd`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "enodd.github.io",
        description: "Personal Portfolio Website",
        lang: "en",
        display: "standalone",
        icon: `./src/images/icons/favicon.png`,
        icons: [
          {
            src: `./src/images/icons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `./src/images/icons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        start_url: "/",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/pages/",
      },
      __key: "images",
    },
  ],
};
