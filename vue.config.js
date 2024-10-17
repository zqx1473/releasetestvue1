const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false ,//防止主键非多单词报错
  publicPath: './',//防止build后路径出错
})
