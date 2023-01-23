const db = require("../routes/db-config")
const jwt = require("jsonwebtoken");

const finduser = (username) =>{
    try {
        username = username
        console.log(username)
        db.query('SELECT * FROM users WHERE username = ?', [username], async(err, result) =>{
            if(err)throw err;
            console.log(result[0])
            return result;
        })
    } catch (err) {
        if(err) return next();
    }
}
module.exports = finduser;