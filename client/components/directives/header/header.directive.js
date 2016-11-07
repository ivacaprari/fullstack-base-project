(function() {
    'use strict';

    angular
        .module('Blog.header')
        .directive('ngHeader', function() {
            return {
                templateUrl: 'components/directives/header/header.html',
                restrict: 'EA',
                controller: HeaderCtrl,
                controllerAs: 'vm'
            };
        });

    function HeaderCtrl($location) {
        var vm = this;

        vm.isActive = isActive;

        function isActive(route) {
            return route === $location.path();
        }
    }
})();
