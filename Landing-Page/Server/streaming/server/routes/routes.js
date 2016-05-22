'use strict';
var stream = require('../controllers/streaming.server.controller'),
 streamServer = require('../controllers/StreamServer.js'),
express = require('express');

module.exports = function (app) {
	app.get('/api/stream', function(req, res){
	         streamServer.stream(req, res);  	
	});
};


