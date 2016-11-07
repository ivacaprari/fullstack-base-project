(function() {
    'use strict';

    angular
        .module('Blog')
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
