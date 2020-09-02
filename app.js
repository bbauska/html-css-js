const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

var userRouter = require("./routes/users");

//preventing CORS errors in the browser
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requesredd-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});

app.use("/user", userRouter);

module.exports = app;
