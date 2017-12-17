angular.module('global', []).directive('post', function () {
    return {
        restrict: 'E',
        scope: {
            postTitle:"@"
        },
        templateUrl: "views/directive/post.html",
        link: function (scope, element, attrs) {
        
        }
    }
});