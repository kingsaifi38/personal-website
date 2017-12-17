angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController'
                })

                .when('/team', {
                    templateUrl: 'views/team.html',
                    controller: 'TeamController'
                })

                .when('/contact', {
                    templateUrl: 'views/contact.html',
                    controller: 'ContactController'
                })
                .otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);

    }]);