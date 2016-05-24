// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var groceryList =[];
groceryList.push({
            name:"whatever",
            type:"i don't care"
            });
groceryList.push({
            name:"lucky charms",
            type:"cereal"
            });
groceryList.push({
            name:"ground beef",
            type:"sick"
            });
groceryList.push({
            name:"celery",
            type:"vegetable"
            });





db.Grocery.remove({}, function(err, groceries){

  db.Grocery.create(groceryList, function(err, groceries){
    if (err) { return console.log('ERROR', err); }
    console.log("all groceries:", groceries);
    console.log("created", groceries.length, "groceries");
    process.exit();
  });

});
