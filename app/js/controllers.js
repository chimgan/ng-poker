'use strict';

/* Controllers */

var pokerControllers = angular.module('pokerControllers', []);

pokerControllers.controller('PokerHomeCtrl', ['$scope',
  function($scope) {
    $scope.cards = [2,3,4,5,6];
    $scope.game = 'Poker';
  }]);

pokerControllers.controller('PokerRoomCtrl', ['$scope',
  function($scope) {
    $scope.cards = [2,3,4,5,6];
  }]);