const db = require("../routes/db-config")
const jwt = require("jsonwebtoken");

const loggedIn = (req, res, next) =>{
    if (!req.cookies.userRegisterd)return next();
    try {
        const decoded = jwt.verify(req.cookies.userRegisterd, process.env.JWT_SECRET);
        db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, result) =>{
            if(err)throw err;
            res.user = result[0];
            return next(); 
        })
    } catch (err) {
        if(err) return next();
    }
}
module.exports = loggedIn;