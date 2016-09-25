(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// To Buy LIST - controller
ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var itemAdder = this;

  itemAdder.items = ShoppingListCheckOffService.buyItemsList();

  itemAdder.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeToBuyItem(itemIndex);
  };
}

// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtItems = this;

  alreadyBoughtItems.items = ShoppingListCheckOffService.boughtItemList();
}

function ShoppingListCheckOffService() {
  var service = this;

  var shoppingList = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];
  // List of already bought items
  var boughtItems = [];

  service.removeToBuyItem = function (itemIdex) {
    boughtItems.push(shoppingList[itemIdex]);
    shoppingList.splice(itemIdex, 1);
  };

  service.buyItemsList = function () {
    return shoppingList;
  };

  service.boughtItemList = function () {
    return boughtItems;
  };
 }

})();