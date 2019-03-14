const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  runtimeCompiler: true,
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/styles/main.scss")]
    },
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          ['/contact']
        ),
      ]
    }
  }
}
