'use strict';

/* Controllers */

var pokerControllers = angular.module('pokerControllers', []);

pokerControllers.controller('PokerTestCtrl', ['$scope',
  function($scope) {
    $scope.cards = [2,3,4,5,6];
  }]);
