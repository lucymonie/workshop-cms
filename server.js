var http = require('http');
var fs = require('fs');
var message = "Totally fork you node";

function handler (request, response) {
  var method = request.method;
  var endpoint = request.url;

  if(endpoint === '/') {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile(__dirname + '/public/index.html', function(err,file) {
      if(err) {
        console.log(err);
        return;
      }
      response.end(file);
    });
  }
}

var server = http.createServer(handler);
var port = 3000;

server.listen(port, function() {

  console.log("Server is listening on port " + port + ". Ready to accept requests.");
})
