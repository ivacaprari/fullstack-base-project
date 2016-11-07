(function() {
    'use strict';

    angular
        .module('DemoApp')
        .controller('BlogCtrl', BlogCtrl);

    BlogCtrl.$inject = ['BlogEntry', '$state', '$stateParams'];

    /* @ngInject */
    function BlogCtrl(BlogEntry, $state, $stateParams) {
        var vm = this;

        vm.deletePost = deletePost;
        vm.addNewPost = addNewPost;
        vm.editPost = editPost;
        vm.getPost = getPost;
        vm.getPosts = getPosts();

        //if does not have any state param in url get all post
        if ($stateParams.id) {
            vm.post = getPost();
        }

        /**
         * Edit post
         */
        function editPost() {
            vm.submitted = true;
            if (vm.form.$valid) {
                vm.post.date = moment();
                BlogEntry.update({id: vm.post._id}, vm.post, function() {
                    $state.go('blog');
                });
            }
        }

        /**
         * Get all Post
         */
        function getPosts() {
            vm.posts = BlogEntry.query();
        }

        /**
         * Get single post
         * @return {Object} post
         */
        function getPost() {
            return BlogEntry.get({id: $stateParams.id});
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
         * Add new post
         */
        function addNewPost() {
            vm.submitted = true;
            if (vm.form.$valid) {
                vm.post.date = moment();
                BlogEntry.save(vm.post, function() {
                    $state.go('blog');
                });
            }
        }
    }
})();
