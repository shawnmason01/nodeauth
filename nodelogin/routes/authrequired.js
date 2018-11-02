var express = require('express');
var router = express.Router();
var serveIndex = require('serve-index');
var app = express();
app.get('/', function (req, res) {
res.render('auth');
})
router.use('/', express.static('public'), serveIndex('public', {'icons': true}))
module.exports = router;
