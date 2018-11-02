//define vars
var express    = require('express');
var serveIndex = require('serve-index');
var app = express();

//mount modules
app.use('/', express.static('public'), serveIndex('public', {'icons': true}))

//set server port
app.listen(8080);
