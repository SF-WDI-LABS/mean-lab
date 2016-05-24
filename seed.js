var db = require("./models");

var productList =[];
productList.push({
              name: 'ice cream',
              type: 'dairy',
});
productList.push({
              name: 'steak',
              type: 'hmmmm',
});
productList.push({
              name: 'alcohol',
              type: 'panda panda panda',
});
productList.push({
              name: 'coco puffs',
              type: 'cereal',
});

db.Product.remove({}, function(err, products){

  db.Product.create(productList, function(err, products){
    if (err) { return console.log('ERROR', err); }
    console.log("all products:", products);
    console.log("created", products.length, "products");
    process.exit();
  });

});
