/*server.js*/

const hostname = 'localhost';
const port = 8000;

var http = require('http');
var url = require('url');
var fs = require("fs");

var events = require('events');
var eventEmitter = new events.EventEmitter();

// ADD FILE
// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// DELETE FILE
// fs.unlink('mynewfile1.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// RENAME FILE
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

var server = http.createServer(function(req, res) {
  fs.readFile("index.html", function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'text/plain');

  // res.end();
});

server.listen(port, hostname, function() {
  console.log('Server running at http://'+ hostname + ':' + port + '/');
});
