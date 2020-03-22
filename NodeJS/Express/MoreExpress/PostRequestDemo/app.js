var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extented: true }));

app.set("view engine", "ejs");

var friends = ["Olivier", "Camille", "Yves"];

app.get("/", function (req, res) {
	res.render("home");
});

app.post("/addfriend", function (req, res) {
	var newFriend = req.body.newfriend;
	friends.push(newFriend);
	res.redirect("/friends");
});

app.get("/friends", function (req, res) {
	res.render("friends", { friends: friends });
});

// Server
app.listen(3000, function () {
	console.log('Server listening on port 3000');
});
