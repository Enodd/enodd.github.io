module.exports = {
  siteMetadata: {
    siteUrl: "https://enodd.github.io",
    coreTitle: "enodd.github.io",
    title: "enodd",
    author: "Damian Nowak",
  },
  pathPrefix: "/",
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        duration: 550,
      },
    },
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     icon: `src/images/favicon.png`,
    //     icons: [
    //       {
    //         src: `src/images/android-chrome-192x192.png`,
    //         sizes: `192x192`,
    //         type: `image/png`
    //       },
    //       {
    //         src: `src/images/android-chrome-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`
    //       },
    //     ],
    //   },
    // },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
