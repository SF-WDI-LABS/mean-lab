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

  }
