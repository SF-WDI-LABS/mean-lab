var db = require('../models');

function index(req, res) {
  var dataKitties = db.Kitty;
  dataKitties.find(function(err, kitties) {
    res.json(kitties);
  });
}


module.exports = {
  index: index
};
