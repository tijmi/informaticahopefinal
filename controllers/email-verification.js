const express = require("express");
const db = require("../routes/db-config");
const router = express.Router();


const emailverification = async (token,req,res,next) => {
    var tokens = token
    console.log("hello",tokens)
    const email3 = "thdegroote18@gmail.com";
    db.query('UPDATE users SET verify = 0 WHERE email = ?', email3, (err, result) => {
        if(err) throw err 
    })
    db.query('SELECT * FROM users WHERE token = ?',[tokens], async(err, result) =>{
        console.log("1")
        if (err) throw err;
        console.log(result)
        
        if(result[0].verify == 0){
            console.log("2")
            console.log(result[0].email)
            if (result.length > 0) {
                console.log("2.5")
                //var data = {
                    //verify: 1,
                    //email: result[0].email
                //}
                var email = result[0].email
                console.log(email)
                console.log("2.75")
                db.query('UPDATE users SET verify = 1 WHERE email = ?', email, async(err, result) => {
                    console.log(result[0])
                    console.log("3")
                    if(err) throw err 
                })
                var message = { status: 'success', success: "account created succesfully" }
                console.log(message)
                console.log("4")
                return message
              
            } else {
                var message = { status: 'error', error: "email already verified" }
                console.log("5")
                return message
            }
         }else{
            console.log(result)
            console.log("6")
            message={ status: 'error', error: "email already verified" }
            return message
         }
    })
}
module.exports = emailverification;