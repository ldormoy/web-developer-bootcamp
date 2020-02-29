var express = require("express");
var app = express();

//"/" => "Hi there!"
app.get("/", function (req, res) {
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function (req, res) {
    res.send("Goodbye!");
});

// "/dog" => "MEOW!"
app.get("/dog", function (req, res) {
    res.send("MEOW!");
});

app.get("/r/:subredditName", function (req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

// Catchall
app.get("*", function (req, res) {
    res.send("YOU ARE A STAR!!!");
});


app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
