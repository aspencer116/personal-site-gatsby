module.exports = {
  siteMetadata: {
    title: `Andrew Spencer — Senior Product Designer`,
    description: `Portfolio of Andrew Spencer, a Senior Product Designer in New England who works at the intersection of design and frontend code.`,
    author: `@iam_aspencer`,
    keywords: `product designer, design, portfolio, Boston, frontend code,`,
    image: `/images/opengraph.jpg`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: { 'data-colormode': 'system' },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `G-C5P61BF7ZG`,
        // Puts tracking script in the head instead of the body
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrew Spencer Portfolio`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/andrew-spencer_favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
