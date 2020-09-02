var express = require("express");
var router = express.Router();
var db = require("../database");
const path = require("path");

router.get("/", function (req, res, next) {
  res.render("index");
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
  res.redirect("/user/user-list");
});

router.get("/user-list", function (req, res, next) {
  var sql = "SELECT * FROM users";
  db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render("userTable", { userData: data });
  });
});

module.exports = router;
