const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");
const { accountLoginValidator } = require("../validators/auth");

// POST route to login
router.post("/login", accountLoginValidator, AuthController.login);

module.exports = router;
