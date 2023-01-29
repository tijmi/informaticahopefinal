const db = require("../routes/db-config");
const loggedIn = require("../controllers/loggedIn")
const jwt = require("jsonwebtoken");
const util = require("util");

const query = util.promisify(db.query).bind(db);

const like = (loggedIn,async (req,res) => {
    const decoded = jwt.verify(req.cookies.userRegisterd, process.env.JWT_SECRET);
    var user_id = [decoded.id]
    const user = await query('SELECT * FROM users WHERE id = ?', [decoded.id])
    console.log("like.js server side")
    const {messageId} = req.body;
    console.log(messageId);
    console.log(user[0].id);
    db.query('DELETE FROM likes WHERE user_Id = ? AND item_id = ?',[user[0].id, messageId], (error, results)=>{
        db.query('UPDATE message SET nolikes = nolikes - 1 WHERE id = ?', [messageId], (err, result) =>{
            if(err)throw err;
        })
        if(error) throw error;
        return res.json({status:"succes", success:"message posted succesfully"})
    })
})

module.exports = like;