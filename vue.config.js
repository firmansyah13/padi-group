// vue.config.js
module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0'
  },
};
