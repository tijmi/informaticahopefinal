const express = require("express");
const db = require("../routes/db-config");
const router = express.Router();


const emailverification = async (req,res,next) => {
    console.log("jello",req.token)
    db.query('SELECT * FROM users WHERE token = ?',[token], async(err, result) =>{
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
                return res.json({ status: 'success', success: "account created succesfully" })
              
            } else {
                return res.json({ status: 'error', error: "email already verified" })
            }
         }else{
            console.log(result)
            return res.json({ status: 'error', error: "email already verified" })
         }
    })
}
module.exports = emailverification;