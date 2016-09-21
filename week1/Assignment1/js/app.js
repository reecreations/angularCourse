(function () {
  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.buttonClick = function (string) {
      if (!string) {
        return $scope.message = "Please enter data first";
      }
      var arr = string.split(',');
      arr.length <= 3 ? $scope.message = "Enjoy!" : $scope.message = "Too Much!";
    };
  }
})();