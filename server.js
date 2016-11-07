var http = require('http');
var message = "Fork you node."
function handler (request, response) {
  response.writeHead(200, {"Content-type": "text/html"});
  response.write(message);
  response.end();
}

var server = http.createServer(handler);
var port = 3000;

server.listen(port, function() {

  console.log("Server is listening on port " + port + ". Ready to accept requests.");
})
