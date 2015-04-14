var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/post');

var router = require('./app/routes');

app.use('/api', router);

app.listen(port);
console.log('Listening on port: ' + port);
