var http = require('http');
var fs = require('fs');
var path = require('path');
var handler = require('./src/handlers.js')
var querystring = require('querystring');

var message = "Totally fork you node";

var server = http.createServer(handler);
var port = 3000;

server.listen(port, function() {
  console.log("Server wants to fucking mess with you on " + port + ". Ready to take it in the back end.");
})
