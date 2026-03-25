module.exports = async (req, res) => {
  try {
    const app = require("../dist/index.cjs");
    app(req, res);
  } catch (error) {
    console.error("Error loading app:", error);
    res.status(500).json({ 
      error: "Internal Server Error",
      message: error.message 
    });
  }
};

