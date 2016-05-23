var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

var ejs = require('ejs');
app.engine('html', ejs.renderFile);

var controllers = require('./controllers');

app.get('/api/tacos', controllers.tacos.index);


// app.get('/templates/:name', controllers.api.templates);


app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('Express server is running on http://localhost:3000/');
});
