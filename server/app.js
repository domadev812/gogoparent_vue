const express    = require('express'),
      app        = express(),
      http       = require('http').Server(app),
      cors       = require('cors'),
      path       = require('path'),
      bodyParser = require('body-parser')

app.use(cors())
app.use(express.static(path.join(__dirname, '../dist')));
app.use("/", express.static(__dirname + "/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const schedule = require('./routes/schedule');
const auth = require('./routes/auth');

app.use('/api/auth', auth);
app.use('/api/schedule', schedule);

http.listen(8080, function(){
	console.log("Connected & Listen to port 8080");
});