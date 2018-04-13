const express    = require('express'),
      app        = express(),
      http       = require('http').Server(app),
      path       = require('path'),
      bodyParser = require('body-parser'),
      moment     = require('moment'), 
      fs         = require('fs');
let connectionRead, connectionWrite;
let res;
app.use(express.static(path.join(__dirname, '../dist')));
app.use("/", express.static(__dirname + "/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const schedule = require('./routes/schedule');
app.use('/api/schedule', schedule);

http.listen(8080, function(){
	console.log("Connected & Listen to port 8080");
});