const app = require("../dist/index.cjs");

module.exports = (req, res) => {
  return app(req, res);
};

