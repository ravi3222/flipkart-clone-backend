const Product = require("../models/product");

exports.createProduct = (req, res) => {
  res.status(200).json({ message: "hello" });
};
