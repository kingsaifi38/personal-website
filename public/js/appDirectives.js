angular.module('global', []).directive('post', function () {
    return {
        restrict: 'E',
        scope: {
            postTitle: "@"
        },
        templateUrl: "views/directive/post.html",
        link: function (scope, element, attrs) {

        }
    }
}).directive('teamMember', function () {
    return {
        restrict: 'E',
        scope: {
            name: "@",
            profile: "@"
        },
        templateUrl: "views/directive/teamMember.html",
        link: function (scope, element, attrs) {

        }
    }
});