var Livingstones = angular.module('Livingstones', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router']);

(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'views/partials/home-partial.html',
            controller: 'HomeController'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'views/partials/about-partial.html',
            controller: 'AboutController'
        });
    }]);
})(Livingstones);
