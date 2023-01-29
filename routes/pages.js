const express = require("express");
const loggedIn = require("../controllers/loggedIn")
const logout = require("../controllers/logout");
const messages = require("../controllers/messages");
const finduser = require("../controllers/finduser")
const db = require("../routes/db-config")
const jwt = require("jsonwebtoken");
const emailverification = require("../controllers/email-verification");
const path = require("path")

const asyncify = require('express-asyncify')
const router = asyncify(express.Router());

const like = () =>{
    console.log(test)
}

router.get("/", loggedIn, messages, async(req, res) => {
    var user = await res.user;
    var message = await res.message
    if (user != undefined){
        res.render("index", {user: user[0], userid: user["id"], messages:message, like:like})
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

router.get("/profile", loggedIn,messages,async(req,res) => {
    var user = await res.user;
    var message = await res.message;
    if (user != undefined){
        res.render("profile",{user: user[0], messages:message})
    } else{
        res.redirect("/")
    }
})

router.get("/verify-email", async (req,res) => {
    var tokens = req.query.token
    console.log(tokens)
    const verified = await emailverification(tokens)
    console.log("hello",verified)
    if (verified == 1) {
        res.sendFile('verifySuccess.html',{root: "./public"});
    } else {
        res.sendFile('verifyFail.html',{root: "./public"});
    }
})

router.get('/users',loggedIn,messages,async(req, res) => {
    var user = await res.user
    var username = req.query.user
    var message = await res.message  
    if (user != undefined){
        res.render("publicprofile", {user:user[0], username:username, messages:message, usernamestr:String(username)})
    } else{
        res.redirect("/")
    }
});

router.get('/editprofile', async(req,res) => {
    res.sendFile("editprofile.html",{root: "./public"})
})

router.get('/download', function(req, res){
    const file = `${__dirname}/download/definattlythedesktokversion.mp4`;
    res.download(file); // Set disposition and send it.
  });
  


module.exports = router;