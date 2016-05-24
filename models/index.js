var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/taco_test");

var Taco = require('./taco');

module.exports.Taco = Taco;
