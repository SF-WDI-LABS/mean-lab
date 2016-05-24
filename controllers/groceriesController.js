
/************
 * DATABASE *
 ************/

var db = require('../models');



// GET /api/groceries
function index(req, res) {
  db.Grocery.find({}, function(err, allGroceries) {
    res.json(allGroceries);
  });
}

function create(req, res) {
  console.log('body', req.body);


  db.Grocery.create(req.body, function(err, grocery) {
    if (err) { console.log('error', err); }
    console.log(grocery);
    res.json(grocery);
  });
}

function show(req, res) {
  db.Grocery.findById(req.params.groceryId, function(err, foundGrocery) {
    if(err) { console.log('groceriesController.show error', err); }
    console.log('groceriesController.show responding with', foundGrocery);
    res.json(foundGrocery);
  });
}

// function destroy(req, res) {
//   db.Grocery.findOneAndRemove({ _id: req.params.groceryId }, function(err, foundGrocery){
//     // note you could send just send 204, but we're sending 200 and the deleted entity
//     res.json(foundGrocery);
//   });
// }

function update(req, res) {
  console.log('updating with data', req.body);
  db.Grocery.findById(req.params.groceryId, function(err, foundGrocery) {
    if(err) { console.log('grocerysController.update error', err); }
    foundGrocery.name = req.body.name;
    foundGrocery.type = req.body.type;
    foundGrocery.save(function(err, savedGrocery) {
      if(err) { console.log('saving altered grocery failed'); }
      res.json(savedGrocery);
    });
  });

}


export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
