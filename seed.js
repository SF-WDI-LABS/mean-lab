// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var kittyList =[];
kittyList.push({
              name: 'wiggles'
            });
kittyList.push({
              name: 'Metallica'
            });

db.Kitty.remove({}, function(err, kitties){

  db.Kitty.create(kittyList, function(err, kitties){
    if (err) { return console.log('ERROR', err); }
    console.log("all kitties:", kitties);
    console.log("created", kitties.length, "kitties");
    process.exit();
  });

});
