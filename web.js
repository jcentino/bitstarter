var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var inputFile = 'index.html';

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  fs.readFileSync(inputFile, function (err, data) {
      if (err) throw err;
	console.log(data);
      var buffer = new Buffer(data, "utf-8");
      response.send(buffer.toString());
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});