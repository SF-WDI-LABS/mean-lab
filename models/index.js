var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mean-lab");

module.exports.Product = require('./product');
