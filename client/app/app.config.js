(function() {
    'use strict';

    angular
        .module('DemoApp')
        .config(configuration);

    function configuration(
        $urlRouterProvider,
        $locationProvider
    ) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
})();
