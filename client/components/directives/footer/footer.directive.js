(function() {
    'use strict';

    angular
        .module('Blog.footer')
        .directive('ngFooter', function () {
            return {
                templateUrl: 'components/directives/footer/footer.html',
                restrict: 'EA',
                scope: {}
            };
        });
})();
