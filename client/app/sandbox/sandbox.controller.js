(function() {
    'use strict';

    angular
        .module('Blog')
        .controller('SandboxCtrl', SandboxCtrl);

    SandboxCtrl.$inject = ['$stateParams'];

    /* @ngInject */
    function BlogCtrl($stateParams) {
        var vm = this;

        activate()

        function activate() {
            //if does have any state param get it
            if ($stateParams.id) {
                
            }
        }
    }
})();
