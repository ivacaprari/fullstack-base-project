(function() {
    'use strict';

    angular
        .module('Blog')
        .config(function ($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    views: {
                        'main@': {
                            templateUrl: 'app/main/main.html',
                            controller: 'MainCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        });
})();
