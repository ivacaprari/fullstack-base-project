(function() {
    'use strict';

    angular
        .module('Blog')
        .controller('BlogCtrl', BlogCtrl);

    BlogCtrl.$inject = ['$stateParams', 'blogService'];

    /* @ngInject */
    function BlogCtrl($stateParams, blogService) {
        var vm = this;

        vm.deletePost = deletePost;
        vm.addNewPost = addNewPost;
        vm.editPost = editPost;
        vm.getPost = getPost;
        vm.getPosts = getPosts();

        activate()

        function activate() {
            //if does have any state param get it
            if ($stateParams.id) {
                vm.post = getPost();
            }
        }

        /**
         * Edit post
         */
        function editPost() {
            vm.submitted = true;
            if (vm.form.$valid) {
                vm.post.date = moment();
                blogService.updatePost(vm.post);
            }
        }

        /**
         * Get all Post
         */
        function getPosts() {
            vm.posts = blogService.getPosts();
        }

        /**
         * Get single post
         * @return {Object} post
         */
        function getPost() {
            return blogService.getPost($stateParams.id);
        }

        /**
         * Delete single post
         * @param {Object} post
         */
        function deletePost(post) {
            blogService.deletePost(post);
        }

        /**
         * Add new post
         */
        function addNewPost() {
            vm.submitted = true;
            if (vm.form.$valid) {
                vm.post.date = moment();
                blogService.addNewPost(vm.post)
            }
        }
    }
})();
