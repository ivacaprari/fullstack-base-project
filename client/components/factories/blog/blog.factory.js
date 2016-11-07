(function() {
    'use strict';
    angular
        .module('Blog.blog-factory')
        .factory('BlogEntry', BlogEntry);

    function BlogEntry($resource) {
        return $resource('/api/blog/:id/', {id: '@_id'},{
            update: {
                method: 'PUT'
            }
        });
    }
})();
