var ffmpeg = require('fluent-ffmpeg');
//var command = ffmpeg();


module.exports = {
   	stream: function(req,res) {
           res.contentType('mp4'); 
   
           var pathToMovie = '/opt/mean/modules/streaming/server/sample/' + "sample.mpeg"; 
           var proc = ffmpeg(pathToMovie) 
          .preset('divx') 
          .on('end', function() { 
          console.log('file has been converted succesfully'); 
        }) 
        .on('error', function(err) { 
            console.log('an error happened, ',  err.message); 
         }) 
         .pipe(res, {end:true}); 
     }

}

