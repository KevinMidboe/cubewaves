var express = require('express');
var app = express();
var path = require('path');

app.use("/public", express.static(__dirname + '/public'));
app.use("/src", express.static(__dirname + '/src'));


// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
	console.log("Got a GET request for the homepage");
	res.sendFile(path.join(__dirname + '/index.html'));
	// res.send('Hello GET');
})

app.get('/box', function (req, res) {
        console.log("Got a GET request for /box");
        res.sendFile(path.join(__dirname + '/box.html'));
        // res.send('Hello GET');
})

var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port);
})
