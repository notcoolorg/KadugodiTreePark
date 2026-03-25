module.exports = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ 
    status: "ok",
    environment: "serverless",
    timestamp: new Date().toISOString()
  });
};

