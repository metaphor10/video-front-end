var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
var request = require("request");
var authApp = process.env.AUTH_APP;
var videoApp = process.env.VIDEO_APP;


router.post('/signup', function(req, res) {
  request.post({url: authApp + '/api/signup', form: {username:req.body.username, password: req.body.password}}, function(err,httpResponse,body){ /* ... */
      if (err) {
        return console.error('upload failed:', err);
      }
      console.log('Upload successful!  Server responded with:', body);
    res.json(JSON.parse(body))
  })
});

router.post('/signin', function(req, res) {
  request.post({url:authApp + '/api/signin', form: {username:req.body.username, password: req.body.password}}, function(err,httpResponse,body){ /* ... */
      if (err) {
        return console.error('upload failed:', err);
      }
      console.log('obj', httpResponse);
      console.log('Upload successful!  Server responded with:', body);
    res.json(JSON.parse(body))
  })
});

router.get('/video', function (req, res){
  req.pipe(request(videoApp + '/api/v1/video')).pipe(res)
})

module.exports = router;
