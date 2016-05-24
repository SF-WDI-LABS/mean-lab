console.log("in app.js");

angular
  .module('taco', ['ngRoute'])
  .config(config);


config.$inject = ['$routeProvider', '$locationProvider'];

function config( $routeProvider, $locationProvider ){
  $routeProvider
    .when('/', {
      templateUrl: '/templates/tacos',
      controllerAs: 'tacosCtrl',
      controller: 'TacosController'
    })
    .when('/:id',{
      templateUrl: '/templates/tacos-show',
      controllerAs: 'tacosShowCtrl',
      controllers: 'TacoShowController'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

}
