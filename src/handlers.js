var fs = require('fs');
var path = require('path');
var querystring = require('querystring');

module.exports = handler;

function handler (request, response) {
  var method = request.method;
  var endpoint = request.url;
  var fileType = endpoint.split('.')[1];
  if(method === 'GET') {
    if(endpoint === '/') {
      response.writeHead(200, {"Content-Type": "text/html"});
      fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), function(err,file) {
        if(err) {
          console.log(err);
          return;
        }
        response.end(file);
      });
    } else if(endpoint === '/node') {

    } else if(endpoint === '/girls') {

    } else {
      response.writeHead(200, {"Content-Type": "text/" + fileType});
      fs.readFile(path.join(__dirname, '..', 'public', endpoint), function(err,file) {
        if(err) {
          console.log(err);
          return;
        }
        response.end(file);
      });
    }
  } else if(method === 'POST') {
    var allTheData = '';
    response.writeHead(301, {"Location": "/"});

    request.on('data', function(chunkOfData) {
      allTheData += chunkOfData;
    });

    request.on('end', function() {
      var convertedData = querystring.parse(allTheData);
      console.log('Here\'s the blog post: ', convertedData);
      response.end();
    });
  }
}
