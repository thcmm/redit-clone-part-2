(function() {
    'use strict';
    angular.module('app', ['angularMoment', 'ui.router'])
        .component('component', {

            controller: controller,
            templateUrl: '/js/app/app.template.html'
        })

    function controller() {
        var vm = this;
        var showPost = false;
        var showComment = false;
        // vm.time = new Date();
        console.log("app active");

        vm.togglePostForm = function() {
            console.log("f:togglePostForm");
            vm.showPost = !vm.showPost;
            console.log("toggle-state: ", vm.showPost);
        }

        vm.toggleCommentForm = function(post){
            console.log("f:toggleCommentForm");
            vm.showComment = !vm.showComment;
            console.log("toggle-state: ", vm.showComment);
        }

        // START Form validation
        vm.createPost = function() {
            console.log("f:createPost");
            // title
            if (vm.post) {
                // console.log("title: ", vm.post);
                vm.post.time = new Date();
                vm.post.voteCnt = 0;
                vm.post.comments = [];
                // vm.post.showPost = false;
                console.log(vm.post.time);

                vm.posts.push(vm.post);
                console.log("posts: ",vm.posts);
                vm.resetForm();
            } else {
                console.log("invalid post submit");
            };

        };
        // END Form validation
        vm.resetForm = function() {
            delete vm.post;
            vm.togglePostForm();
            console.log("f:resetForm");
        };

        vm.addComment = function(post) {
            console.log("post new comment: ", post.newComment);
            post.comments.push(post.newComment);
            delete post.newComment;
            console.log(post);
            //vm.posts[post].push(vm.post.comment)
            // console.log("f:addComment");
            // console.log("comment: ", post.comment);

        };

        vm.addVote = function(post){
            post.voteCnt++;
            console.log("f:addVote", post.voteCnt);
        }

        vm.removeVote = function(post) {
            console.log("f:removeVote");
            if (post.voteCnt > 0) {
                post.voteCnt--;
            }
        }

        vm.idMe = function(post) {
            console.log("f:idMe", post);
        };


        vm.sortPosts = function sortPosts(by) {
         console.log('sort',by);
         switch (by) {
           case "Votes":
             vm.sort = '-voteCnt';
             vm.sortDisplay = "Votes"
             break;
           case "Date":
             vm.sort = 'time';
             vm.sortDisplay = "Date"
             break;
           case "Title":
             vm.sort = 'title';
             vm.sortDisplay = "Title"
             break;
         }
       }


        vm.someNewFunction = function() {

        };

        vm.$onInit = function() {
            // amMoment.changeLocale('de');
            // vm.posts = [{title: "Post 1", author: "Kalt Ol Kungen",comments:[],url:'http://lorempixel.com/400/200/sports/1',voteCnt:3}, {title: "Post 2", author: "Ful Fetta Flikor",comments:[],url:'http://lorempixel.com/g/400/200',voteCnt:5}, {title: "Post 3", author: "Rot Vin Drikare",comments:[],url:'http://lorempixel.com/400/200/sports',voteCnt:7}];
            vm.sort = '-voteCnt';
            vm.sortDisplay = 'Votes';
            vm.search = "";

             vm.posts = [];
        }
    }
}());

/*
// title
if (vm.post.title) {
    vm.posts.push(vm.post.title)
    console.log("title: ", vm.post.title);
    console.log("posts: ",vm.posts);
};

// body
if (vm.body) {
    posts.push(vm.post.body);
};

// author
if (vm.author) {
    posts.push(vm.post.author);
};

if (vm.url) {
    posts.push(vm.post.url);
};
*/
