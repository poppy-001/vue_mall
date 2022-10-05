const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8085,
    open: true,
    client: {
      webSocketURL: 'ws://0.0.0.0:8085/ws',
    },
  },
})
