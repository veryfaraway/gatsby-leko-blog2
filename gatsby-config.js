require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `주경야근`,
    siteTitleAlt: `주경야근(晝耕夜勤) | 밤낮없이 일하는 개발자를 위한 블로그`,
    siteHeadline: `Personal Blog with Gatsby by @handsomeJung`,
    siteUrl: `https://apple.viewtreefull.com`,
    siteDescription: `Java, Apple, Mac, Big Data, Hadoop, Saprk, Machine Learning, Data Engineer, Cloud, AWS`,
    siteLanguage: `ko`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@handsomeJung`,
    banner: `true`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        formatString: `YYYY.MM.DD`,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Tags`,
            slug: `/tags`,
          },
          // {
          //   title: `About`,
          //   slug: `/about`,
          // },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/handsomeJung`,
          },
          // {
          //   name: `Instagram`,
          //   url: `https://www.instagram.com/lekoarts.de/`,
          // },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `주경야근`,
        description: `Java, Apple, Mac, Big Data, Hadoop, Saprk, Machine Learning, Data Engineer, Cloud, AWS`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: process.env.GOOGLE_ADS_ID
      },
    },
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
