module.exports = {
  siteMetadata: {
    title: `Andrew Spencer — Designer & Web Developer`,
    description: `Portfolio of Andrew Spencer, a hybrid designer and web developer who thrives in the space where design meets frontend web development.`,
    author: `@iam_aspencer`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-72309110-1`,
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
        background_color: `#e6e9ed`,
        theme_color: `#e6e9ed`,
        display: `minimal-ui`,
        icon: `src/images/andrew-spencer_favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `DM Sans`,
            variants: [`400`, `500`, `700`]
          },
          {
            family: `IBM Plex Mono`,
            variants: [`bold`]
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
