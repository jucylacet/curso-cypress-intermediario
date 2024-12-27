const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false, // Não vai utilizar a pasta fixtures
  video: false, // desativa funcionalidade de geração de vídeo
})

