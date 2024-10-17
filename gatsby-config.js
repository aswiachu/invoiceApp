module.exports = {
    siteMetadata: {
      title: "Your Site Title",
      description: "A brief description of your site.",
    },
    plugins: [
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/components/img`, // Adjust as necessary
        },
      },
      // Add other plugins here if needed
    ],
  };
  