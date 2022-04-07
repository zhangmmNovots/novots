module.exports = {
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    disableHostCheck: true,
    // open: true,
    overlay: {
      warnings: false,
      errors: false,
    },
    // 基本路径

    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#4581f6',
          'border-color-base': '#e0e2ea',
          'border-radius-base': '4px',
        },
        javascriptEnabled: true,
      },
    },
  },
}
