const express = require("express");
const db = require("../routes/db-config");
const router = express.Router();


const emailverification = async (token,req,res,next) => {
    var tokens = token
    console.log("hello",tokens)
    db.query('SELECT * FROM users WHERE token = ?',[tokens], async(err, result) =>{
        if (err) throw err;
        console.log(result)
        if(result[0].verify == 0){
            if (result.length > 0) {
                var data = {
                    verify: 1
                }
                db.query('UPDATE users SET ? WHERE email = ?', [result[0].email], data,(err, result) => {
                    console.log('hello2')
                    if(err) throw err
               
                })
                res.errors = { status: 'success', success: "account created succesfully" }
                return next()
              
            } else {
                res.errors = { status: 'error', error: "email already verified" }
                return next()
            }
         }else{
            console.log(result)
            res.errors={ status: 'error', error: "email already verified" }
            return next()
         }
    })
}
module.exports = emailverification;