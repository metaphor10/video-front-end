var express = require('express');
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
  request.post({url:'http://localhost:3000/api/signup', form: {username:'username', password: 'password'}}, function(err,httpResponse,body){ /* ... */
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

module.exports = router;
