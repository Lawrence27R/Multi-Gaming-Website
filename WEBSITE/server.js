var express = require('express')
var app = express()
app.use(express.static(__dirname + '/Public'));
const port = 3000
var http = require('http').createServer(app);


http.listen(port)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/Public/HTML/index.html');
});
