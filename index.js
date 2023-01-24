const express = require("express");
const db = require("./routes/db-config");
const app = express();
const path = require("path");
const cookie = require("cookie-parser");
const PORT = process.env.PORT || 5000;
const hbs = require("hbs");

app.use("/js", express.static(__dirname+ "/public/js"));
app.use("/css", express.static(__dirname+ "/public/css"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, 'views/layouts'));
hbs.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
app.set("views", "./views")
app.use(cookie());
app.use(express.json())
db.connect((err) => {
    if (err) throw err;
    console.log("database connected");
})
app.use("/", require("./routes/pages"));
app.use("/api", require("./controllers/auth"));
app.listen(PORT);
