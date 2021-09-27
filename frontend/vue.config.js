module.exports = {
  transpileDependencies: ['vuetify'],
  configureWebpack: {
    devtool: 'source-map',
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/attendance_vue/' : '/',
  devServer: {
    port: 8081,
    disableHostCheck: true,
  },
}
