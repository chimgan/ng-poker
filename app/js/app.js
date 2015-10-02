'use strict';

/* App Module */

var pokerApp = angular.module('ngPoker', [
  'ngRoute',
  'pokerControllers'
]);

pokerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'PokerHomeCtrl'
      }).
      when('/room', {
        templateUrl: 'partials/room.html',
        controller: 'PokerRoomCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      })
  }]);
