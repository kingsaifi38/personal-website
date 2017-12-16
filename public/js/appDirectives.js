angular.module('global', []).directive('post', function () {
    return {
        restrict: 'E',
        templateUrl: "views/directive/post.html",
        link: function (scope, element, attrs) {
        
        }
    }
});