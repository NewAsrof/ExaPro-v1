//jshint version6

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));


/*---------------Start Admin Content-------------- */

app.get("/Admin", function(req, res) {
    res.render("Admin/Admin");
});

/*---------------End Admin Content-------------- */


/*---------------Start Teacher Content-------------- */

app.get("/Teacher", function(req, res) {
    res.render("Teacher/Teacher");
});

/*---------------End Teacher Content-------------- */


/*---------------Start Student Content-------------- */

app.get("/Student-Home", function(req, res) {
    const title = "Home";
    res.render("Student/Student-Home", { titlePage: title });
});

app.get("/Student-Profile", function(req, res) {
    const title = "Profile";
    res.render("Student/Student-Profile", { titlePage: title });
});

/*---------------End Student Content-------------- */


app.get("/", function(req, res) {
    res.render("Home");
});

app.listen(3000, function() {
    console.log("Server running on port 3000");
});