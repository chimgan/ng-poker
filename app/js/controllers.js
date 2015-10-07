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
      $scope.imagePath = pokerConfig.imagePath;
      $scope.imageExt = pokerConfig.imageExt;

      $scope.shuffleCards = Shuffle(pokerConfig.cardsArr).slice();
      $scope.tableCards = [];
      for (var i = 0; i < 3; i++) {
        $scope.tableCards.push($scope.shuffleCards.pop());
      }
      $scope.tableCards.push(pokerConfig.emptyCard, pokerConfig.emptyCard);
      //console.log($scope.tableCards.length);
    };

    $scope.next = function() {
      for (var i = 0, length = $scope.tableCards.length; i < length; i++) {
        if ($scope.tableCards[i] == pokerConfig.emptyCard) {
          $scope.tableCards[i] = $scope.shuffleCards.pop();
          break;
        }
        if (i == length - 1) {
          alert('finish game');
        }
      }
      //console.log($scope.tableCards);
    }

    $scope.reset();

  }]);
