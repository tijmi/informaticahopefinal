const express = require("express");
const db = require("../routes/db-config");
const util = require("util");

const query = util.promisify(db.query).bind(db);

const emailverification = async (token,req,res,next) => {
    const tokens = token
    console.log("hello", tokens)
  
    const users = await query('SELECT * FROM users WHERE token = ?', [tokens]);
    console.log("1");
    console.log(users);
  
    if (users[0] && users[0].verify === "0") {
        console.log("2");
        console.log(users[0].email);
          
        if (users.length > 0) {
            console.log("2.5");
            const email = users[0].email;
            console.log(email);
            console.log("2.75");
            
            const result = await query('UPDATE users SET verify = 1 WHERE email = ?', email);
            
            console.log(result[0]);
            console.log("3");
            
            return 1;
        } else {
            console.log("5");
            return 0;
        }
    } else {
        console.log("6");
        return 0;
    }
}
module.exports = emailverification;