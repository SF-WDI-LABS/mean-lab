var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  var ProductSchema = new Schema ({

     name: String,
     type: String,
  });

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
