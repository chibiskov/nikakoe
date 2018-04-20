var fs = require('fs');
var html_body = fs.readFileSync('index.html', 'utf8');
var html_body1 = fs.readFileSync('index.js', 'utf8');
var http = require("http");

 
http.createServer(function(req, res){
if (req.url == '/index.html' || req.url == '/') {
       res.setHeader("Content-Type", "text/html"); 
            res.end(html_body); }
if (req.url == '/index.js') {
       res.setHeader("Content-Type", "text/html"); 
            res.end(html_body1); }
}
).listen(80);