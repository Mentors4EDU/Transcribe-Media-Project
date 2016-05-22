
module.exports = function() {
	var stream = function(req, res) {
  	//res.contentType('mpeg');
 	// var pathToMovie = '/opt/mean/modules/streaming/server/sample/' + "sample.mpeg";
 	// var proc = ffmpeg(pathToMovie)
 	//     .preset('mpeg')
 	 //    .on('end', function() {
  	//        console.log('file has been converted succesfully');
  	 //   })
   	//   .on('error', function(err) {
   	//       console.log('an error happened: ' + err.message);
   	 //  })

  	 //   .pipe(res, {end:true});
	
	res.send(200,dummyResponse);
    };
}
