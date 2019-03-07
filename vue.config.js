const path = require('path')
const webpack = require('webpack')

module.exports = {
    baseUrl:'./',
    outputDir: 'dist',
    lintOnSave: false,
    runtimeCompiler: true, //关键点在这
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: () => {},
    configureWebpack: () => {},
    // 配置 webpack-dev-server 行为。
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8081,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        before: app => {}
    },
    chainWebpack: config => {
        config.module
            .rule('swf')
            .test(/\.swf$/)
            .use('url-loader')
            .loader('url-loader')
            .options({
                limit: 10000
            })
    }

}