(function() {
    'use strict';

    angular
        .module('Blog.blog-service')
        .service('blogService', blogService);

    blogService.$inject = ['BlogEntry', '$state'];

    /* @ngInject */
    function blogService(BlogEntry, $state) {
        this.getPosts = getPosts;
        this.getPost = getPost;
        this.deletePost = deletePost;
        this.addNewPost = addNewPost;
        this.updatePost = updatePost;

        /**
         * Get single post
         * @param  {String} id
         * @return {Object} post
         */
        function getPost(id) {
            return BlogEntry.get({id: id});
        }

        /**
         * Get all posts
         * @return {Array} posts
         */
        function getPosts() {
            return BlogEntry.query();
        }

        /**
         * Delete single post
         * @param  {Object} post
         */
        function deletePost(post) {
            BlogEntry.remove({id: post._id}, function() {
                $state.reload();
            });
        }

        /**
         * Add new one single post
         * @param {Object} post
         */
        function addNewPost(post) {
            BlogEntry.save(post, function() {
                $state.go('blog');
            });
        }

        /**
         * Edit one single post
         * @param {Object} post
         */
        function updatePost(post) {
            BlogEntry.update({id: post._id}, post, function() {
                $state.go('blog');
            });
        }
    }
})();
