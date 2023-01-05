const db = require("../routes/db-config")
const jwt = require("jsonwebtoken");
const loggedIn = require("../controllers/loggedIn")

const messages = (loggedIn,(req, res, next,) => {
    if (!req.cookies.userRegisterd)return next();
    else{
      var user = res.user;
        db.query("SELECT * FROM message ORDER BY id DESC", (err, results) => {
            if(err) throw err;
            const message ={ 
            }
            results.forEach(element => {
                const decoded = jwt.verify(req.cookies.userRegisterd, process.env.JWT_SECRET);
                db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, result) =>{
                    if(err)throw err;
                    user = result[0];
                })
                message[element['title']] = [user["username"],element['message'],element['date']]
            });
        res.message = message;
        return next();
        })
    }  
})
    
module.exports = messages;
