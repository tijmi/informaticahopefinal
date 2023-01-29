const db = require("../routes/db-config")
const jwt = require("jsonwebtoken");
const util = require("util");
const e = require("express");
const query = util.promisify(db.query).bind(db);

const loggedIn = async(req, res, next) =>{
    if (!req.cookies.userRegisterd)return next();
    else{
        const decoded = jwt.verify(req.cookies.userRegisterd, process.env.JWT_SECRET);
        var user_id = [decoded.id]
        const user = await query('SELECT * FROM users WHERE id = ?', [decoded.id])
        res.user = user
        return next()
    }
}
module.exports = loggedIn;