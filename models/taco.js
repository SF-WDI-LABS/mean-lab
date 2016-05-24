var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TacoSchema = new Schema({
  meat: String,
  tortilla: String
});
var Taco = mongoose.model('Taco', TacoSchema);
module.exports = Taco;
