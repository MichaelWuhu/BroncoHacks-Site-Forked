const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth");

// POST route to login
router.post("/login", AuthController.login);

module.exports = router;
