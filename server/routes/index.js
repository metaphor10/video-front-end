var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Book = require("../models/book");
var request = require("request");


router.post('/signup', function(req, res) {
console.log('req', req.body);
  request.post({url:'http://localhost:3000/api/signup', form: {username:req.body.username, req.body.password}}, function(err,httpResponse,body){ /* ... */
      if (err) {
        return console.error('upload failed:', err);
      }
      console.log('Upload successful!  Server responded with:', body);
    res.json(JSON.parse(body))
  })
});

router.post('/signin', function(req, res) {
  console.log('req', req.body);
  request.post({url:'http://localhost:3000/api/signin', form: {username:req.body.username, password: req.body.password}}, function(err,httpResponse,body){ /* ... */
      if (err) {
        return console.error('upload failed:', err);
      }
      console.log('Upload successful!  Server responded with:', body);
    res.json(JSON.parse(body))
  })
});

router.get('/video', function (req, res){
  req.pipe(request('http://localhost:3007/api/v1/video')).pipe(res)
})

module.exports = router;
