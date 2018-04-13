const express    = require('express'),
      app        = express(),
      http       = require('http').Server(app),
      path       = require('path'),
      moment     = require('moment'), 
      fs         = require('fs');
let connectionRead, connectionWrite;
let res;
app.use(express.static(path.join(__dirname, '../dist')));
app.use("/", express.static(__dirname + "/"));

http.listen(8080, function(){
	console.log("Connected & Listen to port 8080");
});