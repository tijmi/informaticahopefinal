const db = require("../routes/db-config");
const bcrypt =require("bcryptjs");

const editprofile = async (req, res) => {
    const {newusername,passwordold,passwordnew:Npassword,passwordrepeat} = req.body
    console.log(req.body )
    if(passwordold && (!Npassword || !passwordrepeat)) return res.json({satus:'error', error:"Please enter new password or reapeat newpassword"});
    else{

    }
}
module.exports = editprofile;