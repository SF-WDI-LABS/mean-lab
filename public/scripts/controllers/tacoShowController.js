console.log("Tacos Show Controller loaded but not executed");

angular
  .module('taco')
  .controller('TacoShowController', TacoShowController);

TacoShowController.$inject = ['$http','$routeParams'];

function TacoShowController($http, $routeParams) {
  console.log("tacos show controller executing");
  var vm = this;
  vm.taco = {};
  $http({
    method: 'GET',
    url: '/api/tacos/' + $routeParams.id
  }).then(function successCallback(json){
    vm.taco = json.data;
  }, function errorCallback(res){
    console.log("ERROR: " + res);
  });
}
