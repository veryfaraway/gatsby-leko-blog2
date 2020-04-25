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
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: process.env.GOOGLE_ADS_ID
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TM_ID,
  
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
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
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 950,
              sizeByPixelDensity: true,
              wrapperStyle: fluidResult => `flex:${_.round(fluidResult.aspectRatio, 2)};`,
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active : true,
              // Add a custom css class
              class  : 'emoji-icon',
              // In order to avoid pattern mismatch you can specify
              // an escape character which will be prepended to the
              // actual pattern (e.g. `#:poop:`).
              escapeCharacter : ':', // (default: '')
              // Select the size (available size: 16, 24, 32, 64)
              size   : 64,
              // Add custom styles
              styles : {
                display      : 'inline',
                margin       : '0',
                'margin-top' : '1px',
                position     : 'relative',
                top          : '5px',
                width        : '25px'
              }
            }
          },
        ],
      },
    },
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
