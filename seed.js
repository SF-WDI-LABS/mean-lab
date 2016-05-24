var db = require("./models");

var tacoList = [{
  meat: "fish",
  tortilla: "flour"
},
{
  meat: "chicken",
  tortilla: "corn"
},
{
  meat: "carnitas",
  tortilla: "flour"
}];

db.Taco.remove({}, function(err, tacos){

  db.Taco.create(tacoList, function(err, tacos){
    if (err) { return console.log("ERROR: " + err );}
    console.log("All tacos: ", tacos);
    process.exit();
  });

});
