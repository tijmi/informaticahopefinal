const db = require("../routes/db-config")
const jwt = require("jsonwebtoken");
const loggedIn = require("../controllers/loggedIn")

const messages = (loggedIn,(req, res, next,) => {
    if (!req.cookies.userRegisterd)return next();
    else{
      var username = false
        db.query("SELECT * FROM message ORDER BY id DESC", (err, results) => {
            if(err) throw err;
            const message ={ 
            }
            results.forEach(element => {
                const id = element['user_id']
                db.query('SELECT * FROM users WHERE id = ?', [id], (err, result) =>{
                    if(err)throw err;
                    const username = result[0];
                    message[element['title']] = [username["username"],element['message'],element['date'],element['id'],element['']];
                })
            });
        res.message = message;
        return next();
        })
    }  
})
    
module.exports = messages;
