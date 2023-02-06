module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/lovemathe-homepage/' : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
      ],
    },
  },
};
