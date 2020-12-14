const express = require("express");
const { signin, signup } = require("../../controllers/admin/auth");
const {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} = require("../../validators/auth");
const router = express.Router();

router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);

module.exports = router;
