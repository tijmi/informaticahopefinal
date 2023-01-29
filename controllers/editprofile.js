const db = require("../routes/db-config");
const bcrypt =require("bcryptjs");
const loggedIn = require("./loggedIn");
const util = require("util");
const e = require("express");
const query = util.promisify(db.query).bind(db);
const jwt = require("jsonwebtoken");

const editprofile = (loggedIn, async (req, res) => {
    const decoded = jwt.verify(req.cookies.userRegisterd, process.env.JWT_SECRET);
    var user_id = [decoded.id]
    const user = await query('SELECT * FROM users WHERE id = ?', [decoded.id])
    console.log(user)
    const {newusername,passwordold,passwordnew:Npassword,passwordrepeat} = req.body
    const useduser = await query('SELECT username FROM users WHERE username = ? ',[newusername])
    console.log(req.body )
    if (!req.body){ return res.json({satus:'error', error:"Please enter new password or new username"})
    }else if(passwordold && (!Npassword || !passwordrepeat)) return res.json({satus:'error', error:"Please enter new password or reapeat newpassword"});
    else{
        if(newusername&&passwordold&&Npassword&&passwordrepeat){
            if(!await bcrypt.compare(passwordold, user[0].password))return res.json({status:'error', error:"old password is incorrect"})
            else if (Npassword.length < 8) return res.json({status: "error", error: "password should be atleast 8 characters"})
            else if ( Npassword != passwordrepeat) return res.json({status: 'error', error: " new passwords are not the same"})
            else if (useduser[0]) return res.json({status: 'error', error: "username already in use"})
            else {
                const password = await bcrypt.hash(Npassword, 8);
                db.query("UPDATE users SET password = ? WHERE id = ?",[password,user[0].id], (error, results)=>{
                    if (error) throw error;
                    db.query("UPDATE users SET username = ? Where id = ?", [newusername,user[0].id], (err, result) =>{
                        if(err) throw err
                        res.json({satus:'succes', success:"username and pasword succesfully updated"})
                        return
                    })})
            //db.query("UPDATE users SET username = ? Where id = ?", [newusername,user[0].id], (err, result) =>{
            //    if(err) throw err
            //    return res.json({satus:'succes', succes:"username succesfully updated"});
            //})
            }}else if(newusername){
                if (useduser[0]) return res.json({status: 'error', error: "username already in use"})
                else {
                db.query("UPDATE users SET username = ? Where id = ?", [newusername,user[0].id], (err, result) =>{
                    if(err) throw err
                    return res.json({satus:'succes', success:"username succesfully updated"});
            })
            }
            }else if (passwordold&&Npassword&&passwordrepeat){
                if(!await bcrypt.compare(passwordold, user[0].password))return res.json({status:'error', error:"old password is incorrect"})
                else if (Npassword.length < 8) return res.json({status: "error", error: "password should be atleast 8 characters"})
                else if ( Npassword != passwordrepeat) return res.json({status: 'error', error: " new passwords are not the same"})
                else {
                    const password = await bcrypt.hash(Npassword, 8);
                    db.query("UPDATE users SET password = ? WHERE id = ?",[password,user[0].id], (error, results)=>{
                        if (error) throw error;
                            return res.json({satus:'succes', success:"pasword succesfully updated"})
                        })}
             }else return{satus:'error', error:"password succesfully updated"}}
})
module.exports = editprofile;