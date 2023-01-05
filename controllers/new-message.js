const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");

const newmessage = async (req,res) => {
    const {title, message} = req.body
    if(!message) return res.json({status:"error", error: "please enter a message"})
    else{
        const decoded = jwt.verify(req.cookies.userRegisterd, process.env.JWT_SECRET);
        var user_id = [decoded.id]
        var date = new Date().toJSON().slice(0,19)
        console.log(date)
        var SQL = "INSERT INTO message (title,message,user_id,date) VALUES ?";
        var values = [
            [title,message,user_id,date]
        ];
        db.query(SQL,[values], (error, results)=>{
            if(error) throw error;
            return res.json({status:"succes", success:"message posted succesfully"})
        })
    }
}

module.exports = newmessage;