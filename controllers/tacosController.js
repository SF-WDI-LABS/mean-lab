console.log("in TACOS CONTROLLER");

var db = require('../models');

function index(req,res){
  console.log("in index");
  db.Taco.find({}, function(err, allTacos){
    res.json(allTacos);
  });
}

function create(req, res){
  db.Taco.create(req.body, function(err, taco){
    if (err) {console.log("ERROR: " + err);}
    res.json(taco);
  });
}

function update(req, res){
  db.Taco.findById(req.params.tacoId, function(err, foundTaco){
    if(err){console.log("ERROR: ",err);}
    foundTaco.meat = req.body.meat;
    foundTaco.tortilla = req.body.tortilla;
    foundTaco.save(function(err, savedTaco){
      if(err){console.log("ERROR: ",err);}
      res.json(savedTaco);
    });
  });
}

function destroy(req, res){
  db.Taco.findOneAndRemove({ _id: req.params.tacoId }, function(err, deletedTaco){
    if(err){console.log("ERROR: ", err);}
    res.json(deletedTaco);
  });
}

module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy
};
