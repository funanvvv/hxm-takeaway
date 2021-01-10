const merge = require('webpack-merge')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
  parallel: false,
  chainWebpack: config => {
    config.module.rule('ts').use('ts-loader').tap(options => {
      options = merge(options, {
        happyPackMode: true,
        transpileOnly: true,
        getCustomTransformers: () => ({
          before: [
            tsImportPluginFactory({
              libraryName: 'vant',
              libraryDirectory: 'es',
              // 这句必须加上，不然修改主题没有效果
              style: name => `${name}/style/less`
            })
          ]
        }),
        compilerOptions: {
          module: 'es2015'
        }
      })
      return options
    })
    config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
}