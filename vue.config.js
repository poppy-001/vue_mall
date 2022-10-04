const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    open: true,
    client: {
      webSocketURL: 'ws://0.0.0.0:8082/ws',
    },
  },
})
