angular
  .module('groceryList', [])
  .controller('GroceryIndexController', GroceryIndexController);

  function GroceryIndexController () {
    var vm = this;
    vm.newGrocery = {};

    vm.newGrocery = {
      name: 'strawberries',
      type: 'fruit'
    };
    vm.groceries = [
      {
        name: 'turkey',
        type: 'meat'
      },
      {
        name: 'bread',
        type: 'pastry'
      },
      {
        name: 'chocolate',
        type: 'candy'
      }
    ];
  }
