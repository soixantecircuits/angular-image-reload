'use strict';

/**
 * @ngdoc function
 * @name angularImageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularImageApp
 */
angular.module('angularImageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
