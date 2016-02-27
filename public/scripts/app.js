var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'PeopleController'
        })
        .when('/addresses', {
            templateUrl: '/views/templates/addresses.html',
            controller: 'AddressController'
        })
        .when('/hobby', {
            templateUrl: '/views/templates/hobby.html',
            controller: 'HobbyController'
        })
        .otherwise({
            redirectTo: 'home'
        });
}]);



