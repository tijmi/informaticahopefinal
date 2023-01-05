const logout =(req, res)  => {
    console.log("logout");
    res.clearCookie("userRegisterd");
    res.redirect("/");
}
module.exports = logout;