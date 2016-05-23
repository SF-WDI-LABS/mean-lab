console.log("in TACOS CONTROLLER");

var db = require('../models');

function index(req,res){
  console.log("in index");
  db.Taco.find({}, function(err, allTacos){
    res.json(allTacos);
  });

}

module.exports = {
  index: index
};
