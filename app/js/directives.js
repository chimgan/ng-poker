'use strict';

/* Directives */

var pokerDirectives = angular.module('pokerDirectives', []);

pokerDirectives.directive("greet", function () {
    return {
        template: "<p>Привет, {{ name }}</p>",
        replace: true,
        scope: {},

        link: function (scope, element, attributes) {
            scope.name = "Иван"
        }
    }
});
