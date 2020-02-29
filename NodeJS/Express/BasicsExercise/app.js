var express = require('express');
var app = express();

app.get("/", function (req, res) {
	res.send("Hi there, welcome to my assignment!");
});

// Speaking animals
app.get("/speak/:animal", function (req, res) {
	var greetings = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!"
	};
	var greeter = req.params.animal.toLowerCase();
	res.send("The " + greeter + " says '" + greetings[greeter] + "'");
});


// Repeat after me
app.get("/repeat/:word/:count", function (req, res) {
	var word = req.params.word;
	var count = Number(req.params.count);
	var output = "";
	for (var i = 0; i < count; i++) {
		output += word + " ";
	}
	res.send(output);
});

// Catchall
app.get("*", function (req, res) {
	res.send("Sorry, page not found...What are you doing with your life?");
});

// Server
app.listen(3000, function () {
	console.log('Server listening on port 3000');
});
