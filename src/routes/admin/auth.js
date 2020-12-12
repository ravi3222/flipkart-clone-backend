const express = require("express");
const { signin, signup } = require("../../controllers/admin/auth");
const router = express.Router();

router.post("/admin/signin", signin);

router.post("/admin/signup", signup);

module.exports = router;
