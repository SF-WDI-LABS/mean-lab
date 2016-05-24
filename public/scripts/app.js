console.log("sanity check: js is working");

angular
  .module('mean-lab', ['ngRoute'])
  .config(config);

function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/kitties',
      controllerAS: 'kittiesIndexCtrl',
      controller: 'KittiesIndexController'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}
