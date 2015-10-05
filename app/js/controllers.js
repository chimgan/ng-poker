'use strict';

/* Controllers */

var pokerControllers = angular.module('pokerControllers', []);

pokerControllers.controller('PokerHomeCtrl', ['$scope',
  function($scope) {
    $scope.cards = [2,3,4,5,6];
    $scope.game = 'Poker';
  }]);

pokerControllers.controller('PokerRoomCtrl', ['$scope', 'pokerConfig',
  function($scope, pokerConfig) {

    $scope.reset = function() {
      $scope.shuffleCards = Shuffle(pokerConfig.cardsArr);
      $scope.tableCards = [];
      for (var i=0; i<3; i++) {
        $scope.tableCards.push(pokerConfig.imagePath + $scope.shuffleCards.pop() + pokerConfig.imageExt);
      }
      $scope.tableCards.push(pokerConfig.emptyCard, pokerConfig.emptyCard);
      console.log($scope.tableCards);
    };

    $scope.reset();

  }]);

function Shuffle(o) {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};