(function() {
    'use strict';

    angular
        .module('DemoApp.header')
        .directive('ngHeader', function() {
            return {
                templateUrl: 'components/directives/header/header.html',
                restrict: 'EA',
                controller: headerCtl
            };
        });

    function headerCtl($scope, $location) {

        $scope.isCollapsed = true;

        $scope.isActive = function(route) {
            return route === $location.path();
        };
    }
})();
