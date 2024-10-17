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
          path: `${__dirname}/src/images/`, // Adjust as necessary
        },
      },
      // Other plugins can be added here
    ],
  };
  