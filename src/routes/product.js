const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const { createProduct } = require("../controllers/product");
const router = express.Router();

router.post("/product/create", requireSignin, adminMiddleware, createProduct);

module.exports = router;
