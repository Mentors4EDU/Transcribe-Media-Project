
var path = require('path'),
 express = require('express'),
 app = express(),
 routes = require('../routes/routes.js')(app),
 ffmpeg = require('fluent-ffmpeg');
 //cmd = new FfmpegCommand();

//app.use(express.static(__dirname + '/flowplayer'));

app.listen(4000);