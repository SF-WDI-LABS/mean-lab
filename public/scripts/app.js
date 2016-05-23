angular
  .module('taco', []);

angular
  .module('taco')
  .controller("TacosController", TacosController);

  function TacosController(){
    vm = this;

    vm.newTaco = {
      meat: "beef",
      tortilla: "corn"
    };

    vm.tacos = [
      {
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
      }
    ];

    vm.submit = function(){
      console.log("HIT!");
      var taco = clone(vm.newTaco);
      vm.tacos.push(taco);
    };
  }

function clone(obj){
  var clone = {};
  for (var key in obj) {
    clone[key] = obj[key];
  }
  return clone;
}
