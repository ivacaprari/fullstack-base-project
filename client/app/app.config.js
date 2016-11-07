(function() {
    'use strict';

    angular
        .module('Blog')
        .config(configuration);

    function configuration(
        $urlRouterProvider,
        $locationProvider
    ) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    }
})();
