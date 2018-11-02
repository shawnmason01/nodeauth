var express = require('express');
var router = express.Router();
var serveIndex = require('serve-index');
var app = express();

/* GET users listing. */

router.get('/', function(req, res, next) {
res.render('users');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/logout', function(req, res, next) {
  res.render('logout');
});

module.exports = router;
