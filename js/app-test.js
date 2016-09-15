( function (){
 'use strict';
 angular.module('LunchCheck', [])
 .controller('LunchCheckController', function($scope){
    $scope.displayMessage = function(){
    //  $scope.names = '';
        var count = $scope.names.length;
        $scope.customStyle = {};
        if(count == 0){
            $scope.msg = "Please enter data first";
              $scope.customStyle.style = {"color":"red"};
        }
        else if(count > 0 && count <= 3){
             $scope.msg = "Enjoy!";
              $scope.customStyle.style = {"color":"green"};
        }
        else {
            $scope.msg = "Too much!";
             $scope.customStyle.style = {"color":"green"};
        }
      };

 });
})();
