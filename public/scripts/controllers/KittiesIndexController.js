angular
  .module('mean-lab')
  .controller('KittiesIndexController', KittiesIndexController);

  KittiesIndexController.$inject = ['$http'];

  function KittiesIndexController ($http) {
    var vm = this;
    // vm.newKitty = {};
    vm.newKitty = {
      name: "snuggles"
    };

    $http({
      method: 'GET',
      url: '/api/kitties'
    }).then(function successCallBack(res) {
      vm.kitties = res.data;
      console.log("get kities");
    });

  }
