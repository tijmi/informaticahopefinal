const express = require("express");
const register = require("./register");
const login = require("./login");
const newmessage = require("./new-message");
const emailverification = require("./email-verification")
const logout = require("./logout");
const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/new-message",newmessage)
router.post("/emailverification", emailverification)
router.post("/logout")

module.exports = router;