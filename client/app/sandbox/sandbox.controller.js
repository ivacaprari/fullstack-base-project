(function() {
    'use strict';

    angular
        .module('Blog')
        .controller('SandboxCtrl', SandboxCtrl);

    SandboxCtrl.$inject = ['$stateParams'];

    /* @ngInject */
    function SandboxCtrl($stateParams) {
        var vm = this;
    }
})();
