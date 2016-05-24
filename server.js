// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
// generate a new express app and call it 'app'
var app = express();
var bodyParser = require('body-parser');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());

// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets


// set 'html' as the engine, using ejs's renderFile function
// var ejs = require('ejs');
// app.engine('html', ejs.renderFile);
// app.set('view engine', 'html');

// var controllers = require('./controllers');


/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

 app.get('/api', controllers.api.index);

 app.get('/api/groceriesController', controllers.groceriesController.index);
 app.post('/api/groceriesController', controllers.groceriesController.create);
 app.delete('/api/groceriesController/:Id', controllers.groceriesController.destroy);
 app.put('/api/groceriesController/:Id', controllers.groceriesController.update);


 /* set up a route to get the templates. Templates are
  * blocks of HTML that Angular will use to render each
  * "view" or page of your app.
  */
 app.get('/templates/:name', controllers.api.templates);

 // ALL OTHER ROUTES (ANGULAR HANDLES)
 // redirect all other paths to index
 app.get('*', function homepage (req, res) {
   res.sendFile(__dirname + '/views/index.html');
 });


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
