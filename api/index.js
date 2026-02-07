module.exports = async (req, res) => {
  res.status(200).json({ 
    message: "API funcionando",
    endpoints: ["/api/catalogos"]
  });
};
