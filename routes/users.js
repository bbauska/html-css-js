var express = require("express");
var router = express.Router();
var db = require("../database");
const path = require("path");

router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../", "views", "index.fundamentals.html"));
});

router.post("/create", function (req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;

  var sql = `INSERT INTO users (name, email,phone) VALUES ('${name}', '${email}', '${phone}')`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    console.log("record inserted");
  });
  res.redirect("/user");
});

module.exports = router;
