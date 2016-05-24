console.log("in app.js");

angular
  .module('taco', []);

angular
  .module('taco')
  .controller("TacosController", TacosController);

  TacosController.$inject = ['$http'];

  function TacosController( $http ){

    console.log("in tacos controller");
    vm = this;

    vm.tacos = [];

    vm.newTaco = {
      meat: "beef",
      tortilla: "corn"
    };

    $http({
      method: "GET",
      url: '/api/tacos',
    }).then(function successCallback(res){
      console.log("RES>DATA",res.data);
      vm.tacos = res.data;
    }, function errorCallback(res){
      console.log(res);
    });

    vm.createTaco = function() {
      $http({
        method:"POST",
        url: '/api/tacos',
        data: vm.newTaco,
      }).then(function successCallback(res){
        vm.tacos.push(res.data);
      }, function errorCallback(res){
        console.log("ERROR", res);
      });
    };

    vm.updateTaco = function(taco){
      $http({
        method: "PUT",
        url: '/api/tacos/' + taco._id,
        data: taco
      }).then(function successCallback(res){
        // vm.tacos.slice(vm.tacos.indexOf(taco),1, res.data);
      }, function errorCallback(res){
        console.log("ERROR: ",res);
      });
    };

    vm.eatTaco = function(taco) {
      $http({
        method:'DELETE',
        url: '/api/tacos/' + taco._id,
      }).then(function successCallback(res){
        var index = vm.tacos.indexOf(taco);
        vm.tacos.splice(index,1);
      }, function errorCallback(res){
        console.log("ERROR: ", res);
      });
    };

  }
