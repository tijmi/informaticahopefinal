const db = require("../routes/db-config")
const loggedIn = require("../controllers/loggedIn")
const util = require("util");
const e = require("express");
const query = util.promisify(db.query).bind(db);
const jwt = require("jsonwebtoken");

const messages = (loggedIn,async(req, res, next,) => {
    if (!req.cookies.userRegisterd)return next();
    else{
        const decoded = jwt.verify(req.cookies.userRegisterd, process.env.JWT_SECRET);
        var user_id = [decoded.id]
        const user = await query('SELECT * FROM users WHERE id = ?', [decoded.id])
        var liked = {

        }
           db.query("SELECT * FROM message ORDER BY id DESC", async(err, results) => {
                if(err) throw err;
                const message ={ 

                }
                let x = 0
                await results.forEach( async element => {
                    const like = await query('SELECT * FROM likes WHERE item_id =?', [element['id']])
                    let i = 0
                    liked[x] = false
                    await like.forEach( async (element1) =>{
                        console.log(x)
                        if (like[i].item_id == element['id']){
                            if (like[i].user_id == user_id) {
                                liked[x] = true
                            }
                        }
                        i += 1           
                    })
                    message[element['token']] = [element['username'],element['message'],element['date'],element['title'],element['nolikes'],element['id'],element['user_id'], liked[x]];
                    x += 1
                });
                res.message = message,liked;
                return next();
            })
        }  
})
module.exports = messages;
