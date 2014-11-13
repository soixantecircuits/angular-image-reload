'use strict';

/**
 * @ngdoc function
 * @name angularImageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularImageApp
 */
angular.module('angularImageApp')
  .controller('MainCtrl', function ($scope, $location, $timeout) {

    $scope.timeInMs = 0;
    $scope.location = ['about','/'];

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var countUp = function() {
        $scope.timeInMs+= 500;
        $location.path($scope.location[Math.floor(Math.random() * $scope.location.length)]);
        $timeout(countUp, 1500);
    }

    $timeout(countUp, 1500);
    
  });
