
var path = require('path'),
 express = require('express'),
 app = express();
 var streamServer = require('./streamserver.js');

	app.get('/api/stream/:filename', function(req, res){
		streamServer.stream(req, res);
	});

app.listen(4000);

