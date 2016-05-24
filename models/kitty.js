var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var KittySchema = new Schema({
  name: String
});

var Kitty = mongoose.model('Kitty', KittySchema);

module.exports = Kitty;
