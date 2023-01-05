const express = require("express");
const loggedIn = require("../controllers/loggedIn")
const logout = require("../controllers/logout");
const messages = require("../controllers/messages");
const db = require("../routes/db-config")
const jwt = require("jsonwebtoken");
const emailverification = require("../controllers/email-verification");
const path = require("path")
const router = express.Router();


router.get("/", loggedIn, messages, (req, res) => {
    var user = res.user;
    var message = res.message;
    if (user != undefined){
        res.render("index", {user: user["username"], messages:message})
    } else{
        res.render("index", {user: null})
    }
})
router.get("/register",  (req, res) => {
    res.sendFile("register.html", {root: "./public"});
})
router.get("/login",  (req, res) => {
    res.sendFile("login.html", {root: "./public"});
})
router.get("/logout", logout)

router.get("/create-message", (req, res) => {
    res.sendFile("new-message.html", {root: "./public"});
})

router.get("/profile", loggedIn,(req,res) => {
    var user = res.user;
    if (user != undefined){
        res.render("profile",{user: user})
    } else{
        res.render("index", {user:null})
    }
})

router.get("/verify-email", (req,res) => {
    var token = req.query.token
    console.log(token)
    res.sendFile(path.join(__dirname, '../public', 'emailverification.html'),token)
})



module.exports = router;