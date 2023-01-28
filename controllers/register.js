const db = require("../routes/db-config");
const bcrypt =require("bcryptjs");
var nodemailer = require('nodemailer');
var randtoken = require('rand-token');

const sendEmail = (email, token) => {
 
    var email = email;
    var token = token;
  
    var mail = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'informaticasitethijmen@gmail.com', // Your email id
            pass: 'fngsqbchazvycsxl' // Your password
        }
    });
  
    var mailOptions = {
        from: 'informaticasitethijmen@gmail.com',
        to: email,
        subject: 'Email verification',
        html: '<p> use this <a href="http://localhost:5000/verify-email?token=' + token + '">link</a> to verify your email address</p>'
  
    };
  
    mail.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log('not send')
            return 1
        } else {
            console.log('send')
            return 0
        }
    });
  }

const register = async (req, res) => {
    const {email, password: Npassword, passwordrepeat, username} = req.body
    console.log(req.body)
    if(!email || !Npassword) return res.json({satus:'error', error:"Please enter your email and password"});
    else{
        db.query('SELECT username FROM users WHERE username = ?', [username], async(err, result) => {
            if(err) throw err;
            console.log(result)
            if(result[0]) return res.json({ status: 'error', error: "username already in use" })
                else {
                db.query('SELECT email FROM users WHERE email = ?', [email], async(err, result) => {
                    if (err) throw err;
                    console.log(result)
                    if(result[0]) return res.json({ status: 'error', error: "email already in use" })
                    else if (Npassword.length < 8) return res.json({status: "error", error: "password should be atleast 8 characters"})
                    else if ( Npassword != passwordrepeat) return res.json({status: 'error', error: "passwords are not the same"})
                    else {
                        const password = await bcrypt.hash(Npassword, 8);
                        const token = randtoken.generate(20);
                        var sql = "INSERT INTO users (username,email,token,password) VALUES ?";
                        var values = [
                            [username, email, token, password]
                        ];
                        db.query(sql,[values], (error, results)=>{
                            if (error) throw error;
                            const sent = sendEmail(email, token);
                            if (sent != '0') {
                                var data = {
                                    token: token
                                }
                                db.query('UPDATE users SET ? WHERE email ="' + email + '"', data, function(err, result) {
                                    if(err) throw err
                                })
                                return res.json({ status:"alertmsg", alertmsg:"please check email for verification" })
                            } else {
                                return res.json({ status: 'error', error: "something went wrong please try again" })
                            }
                        })
                    }
                })    
        }
    })
    }
}
module.exports = register;