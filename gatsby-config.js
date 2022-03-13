module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-plugin-react-redux-persist`,
            options: {
              // [required] - path to your createStore module
              pathToCreateStoreModule: './src/store/store',
              // [optional] - options passed to `serialize-javascript`
              // info: https://github.com/yahoo/serialize-javascript#options
              // will be merged with these defaults:
              serialize: {
                space: 0,
                // if `isJSON` is set to `false`, `eval` is used to deserialize redux state,
                // otherwise `JSON.parse` is used
                isJSON: true,
                unsafe: false,
                ignoreFunction: true,
              },
              // [optional] - if true will clean up after itself on the client, default:
              cleanupOnClient: true,
              // [optional] - name of key on `window` where serialized state will be stored, default:
              windowKey: '__PRELOADED_STATE__',
            },
        },
        "gatsby-transformer-json",
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'data',
            path: `${__dirname}/src/content`
          }
        },
        {
          resolve: 'gatsby-source-filesystem',
          options: {
            name: 'images',
            path: `${__dirname}/src/images`
          }
        },
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
    ]
}