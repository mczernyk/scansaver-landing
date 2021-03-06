module.exports = {
  siteMetadata: {
    title: `ScanSaver 🤳`,
    description: `Scan QR Codes and collect links safely with ScanSaver 🤳.`,
    author: `ScanSaver`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://app.us5.list-manage.com/subscribe/post?u=25148b34cc473a36c7406c096&amp;id=2560e427e7',

      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ScanSaver 🤳`,
        short_name: `ScanSaver 🤳`,
        start_url: `/`,
        background_color: `#048BFF`,
        theme_color: `#048BFF`,
        display: `minimal-ui`,
        icon: `src/images/ssLogo.png`, // UPDATE THIS
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
