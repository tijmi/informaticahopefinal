const express = require("express");
const register = require("./register");
const login = require("./login");
const newmessage = require("./new-message");
const emailverification = require("./email-verification")
const like = require("./like")
const unlike = require("./unlike");
const editprofile = require("./editprofile");
const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/new-message",newmessage)
router.post("/emailverification", emailverification)
router.post("/logout")
router.post("/like",like)
router.post("/unlike", unlike)
router.post("/editprofile",editprofile)

module.exports = router;