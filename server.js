var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var controllers = require('./controllers');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendfile(__dirname + "/views/index.html");
});

app.get('/api/kitties', controllers.kitties.index);

app.listen(process.env.PORT || 3000, function () {
  console.log('MEAN-lab listening');
});
