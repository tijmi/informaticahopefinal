const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const login = async (req,res) => {
    const {email, password} = req.body;
    if(!email || !password)return res.json({satus:'error', error:"Please enter your email and password"});
    else{
        db.query('SELECT * FROM users WHERE email = ?', [email], async(Err, result) =>{
            //if(Err)throw Err;
            if(!result.length || !await bcrypt.compare(password, result[0].password)){
                db.query('SELECT * FROM users WHERE username = ?', [email], async(Err, result) =>{
                    if(!await bcrypt.compare(password,result[0].password))return res.json({status:'error', error:"Incorrect email or password"})
                    else if (result[0].verify == 0)return res.json({status:'error', error:"please verify email"})
                    else{
                const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET,{
                    expiresIn:process.env.JWT_EXPIRES
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                } 
                res.cookie("userRegisterd", token, cookieOptions);
                if(result[0].verify == "0")return res.json({status: "error", error: "please verify your email"})
                else return res.json({status:"success", success:"User logged in succesfully"})}})
            }else if (result[0].verify == 0)return res.json({status:'error', error:"please verify email"})
            else{
                const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET,{
                    expiresIn:process.env.JWT_EXPIRES
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                } 
                res.cookie("userRegisterd", token, cookieOptions);
                if(result[0].verify == "0")return res.json({status: "error", error: "please verify your email"})
                else return res.json({status:"success", success:"User logged in succesfully"});
            }
        })
    }
}
module.exports = login;