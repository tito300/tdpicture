const config = require('./config/config.json');

module.exports = {
  siteMetadata: {
    title: `TD Photography`,
    description: `TD Photography is where every photo is a story`,
    author: `Tarek Demachkie`,
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-s3-image',
    //   options: {
    //     bucketName: 'td-photography',
    //     protocol: 'https',
    //   }
    // },
    {
      resolve: 'gatsby-source-s3',
      options: {
        name: 'allS3Image',
        aws: {
          accessKeyId: config.accessKeyId,
          secretAccessKey: config.secretAccessKeyId,
        },
        buckets: ['td-photography'],
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
