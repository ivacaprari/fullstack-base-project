(function() {
    'use strict';

    angular
        .module('DemoApp', [
            'ngResource',
            'ngSanitize',
            'ui.router',
            'ui.bootstrap',
            'DemoApp.footer',
            'DemoApp.header',
            'DemoApp.blog-factory',
            'DemoApp.blog-service',
            'textAngular',
            'DemoApp.limitHtml'
        ]);
})();
