var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var GrocerySchema = new Schema({
  name: String,
  type: String

});


var Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports = Grocery;
