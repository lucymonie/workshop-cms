var http = require('http');
var server = http.createServer();
var port = 3000;

server.listen(port, function() {

  console.log("Server is listening on port " + port + ". Ready to accept requests.");
})
