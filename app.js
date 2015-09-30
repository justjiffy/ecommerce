module.exports = require('./node_modules/express/lib/express');

var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(require('./controllers'));

app.listen(3000); console.log('server starting... go to localhost:3000');
