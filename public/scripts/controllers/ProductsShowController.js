angular
  .module('shopping')
  .controller('ProductsShowController', ProductsShowController);

ProductsShowController.$inject = ['$http', '$routeParams'];

function ProductsShowController ($http, $routeParams) {
  var vm = this;
  vm.product = {};

  $http({
    method: 'GET',
    url: '/api/products/'+$routeParams.id
  }).then(function successCallback(json) {
    console.log('got product data', json.data);
    vm.product = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
