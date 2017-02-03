(function() {
    'use strict';

    angular
        .module('Blog')
        .config(function ($stateProvider) {
            $stateProvider
                .state('sandbox', {
                    url: '/sandbox',
                    views: {
                        'main@': {
                            templateUrl: 'app/sandbox/sandbox.html',
                            controller: 'SandboxCtrl',
                            controllerAs: 'vm'
                        }
                    }
                });
        });
})();
