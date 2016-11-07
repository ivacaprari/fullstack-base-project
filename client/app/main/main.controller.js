(function() {
    'use strict';

    angular
        .module('DemoApp')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$stateParams', 'blogService'];

    /* @ngInject */
    function MainCtrl($stateParams, blogService) {
        var vm = this;

        activate();

        function activate() {
            vm.posts = blogService.getPosts();
        }
    }
})();
