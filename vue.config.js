module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/lovemathe-homepage/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
        {
          test: /\.pdf$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                encoding: false,
              }
            },
          ],
        },
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/css/settings.scss";',
      },
    },
  },
};
