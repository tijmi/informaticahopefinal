const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");
const multer = require('multer')
const randtoken = require('rand-token');
const util = require("util");

const query = util.promisify(db.query).bind(db);

const newmessage = async (req,res) => {
    console.log(req.body.image)
    const {title, message} = req.body
    //var uploadPath = __dirname + '/upload/' + image;
    if(!message) return res.json({status:"error", error: "please enter a message"})
    else{
        const decoded = jwt.verify(req.cookies.userRegisterd, process.env.JWT_SECRET);
        var user_id = [decoded.id]
        const user = await query('SELECT * FROM users WHERE id = ?', [decoded.id])
        var date = new Date().toJSON().slice(0,19)
        console.log(date)
        const token = randtoken.generate(20);
        var SQL = "INSERT INTO message (title,message,user_id,username,date,token) VALUES ?";
        var values = [
            [title,message,user_id,user[0].username,date,token]
        ];
        db.query(SQL,[values], (error, results)=>{
            if(error) throw error;
            return res.json({status:"succes", success:"message posted succesfully"})
        })
    }
}

module.exports = newmessage;