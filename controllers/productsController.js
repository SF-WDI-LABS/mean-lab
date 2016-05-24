var db = require('../models');

function index(req, res) {
  db.Product.find({},function (err, product){
    if (!err) {
        res.json(product);
      } else {
        console.log("Can not get api/product db" + err);
      }
  });
}

function create(req, res) {

 var newProduct = new db.Product ({
   name: req.body.name,
   type: req.body.type
 });
 newProduct.save(function (err, product){
   if (err) {
     return console.log("save error: " + err);
   }
   console.log("saved", product.name);
   res.json(product);

 });
}

function show(req, res) {
  db.Product.findById(req.params.ProductId, function(err, found) {
      if (err) {
      console.log('Show Error:', err);
    } else {
      res.json(found);
    }
    });
}

function destroy(req, res) {
  db.Product.findOneAndRemove({ _id: req.params.ProductId }, function(err, foundProduct){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundProduct);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Product.findById(req.params.ProductId, function(err, foundProduct) {
    if(err) { console.log('albumsController.update error', err); }
    foundProduct.name = req.body.name;
    foundProduct.type = req.body.type;
    foundProduct.save(function(err, saveProduct) {
      if(err) { console.log('saving altered album failed'); }
      res.json(saveProduct);
    });
  });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
