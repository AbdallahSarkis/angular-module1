(function () {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', function ($scope) {
      $scope.splitdishes = function() {
        if ($scope.dishes) {
          $scope.outputdishes = $scope.dishes.split(',');
        } else {
          $scope.outputdishes = [];
        }
      };

      $scope.messageForUser = function() {
        if ($scope.outputdishes.length > 3) {
          $scope.message = "Too Much!";
        } else if ($scope.outputdishes.length <= 3 && $scope.outputdishes.length > 0) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Please enter data first";
        }
      };
    });
})();
