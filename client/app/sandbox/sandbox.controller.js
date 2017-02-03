(function() {
    'use strict';

    angular
        .module('Blog')
        .controller('SandboxCtrl', SandboxCtrl);

    SandboxCtrl.$inject = ['$stateParams'];

    /* @ngInject */
    function BlogCtrl($stateParams) {
        var vm = this;
    }
})();
