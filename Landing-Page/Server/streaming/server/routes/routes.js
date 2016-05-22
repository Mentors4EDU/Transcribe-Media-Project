'use strict';
var stream = require('../controllers/streaming.server.controller'),
    streamServer = require('../controllers/streamserver.js');

module.exports = function (app) {
	app.get('/api/stream', function(req, res){
	         //streamServer.stream(req, res);
	});
};
