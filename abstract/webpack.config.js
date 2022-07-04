const path = require("path");

module.exports = {
  resolve: {
    modules: ["node_modules"],
    alias: {
      component$: path.resolve(__dirname, "src/components"),
      Layout$: path.resolve(__dirname, "src/Layout"),
    },
  },
};
