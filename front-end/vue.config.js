
// Vue3 관련 설정 파일
const path = require('path');
module.exports = {
  devServer: {
    https: false,
    port: 8083,
    open: true,
    // proxy: {
    //   '/api/v1': {
    //     target: 'http://i6b104.p.ssafy.io:8080'
    //     // target: 'http://i6b104.p.ssafy.io:8080/'
    //   }
    // },
    proxy: 'http://i6b104.p.ssafy.io:8080',
    historyApiFallback: true,
    hot: true,
    contentBase: path.join(__dirname, '')
  },
  css: {
    requireModuleExtension: false // import 시에 경로에 .module 포함 안해도 됨.
  },
  // transpileDependencies: [
  //   'element-plus'
  // ],
  lintOnSave: false,
  outputDir: '../back-end/Azit/src/main/resources/dist'
  // outputDir: '../backend/src/main/resources/dist'
}
