(function() {
    'use strict';

    angular
        .module('Blog', [
            'ngResource',
            'ngSanitize',
            'ui.router',
            'ui.bootstrap',
            'Blog.footer',
            'Blog.header',
            'Blog.blog-factory',
            'Blog.blog-service',
            'textAngular',
            'Blog.limitHtml'
        ]);
})();
