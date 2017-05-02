angular.module('livingstones')

  .config(['$locationProvider', '$routeProvider', '$httpProvider','$mdThemingProvider','$mdIconProvider',

    function($locationProvider, $routeProvider, $httpProvider, $mdThemingProvider, $mdIconProvider) {

      $httpProvider.defaults.useXDomain = true;
    //   $httpProvider.interceptors.push('headerInperceptorFactory');

      $mdThemingProvider
        .theme('default')
        .accentPalette('teal')
        .warnPalette('red')
        .primaryPalette('cyan',{'default': '300'})
        .backgroundPalette('grey',{'default': '50'});

//----------------------------------------------------------------------
//                           ROUTES
//----------------------------------------------------------------------

      $routeProvider

        .when('/', {
          templateUrl: 'views/template/index.html',
          controller: 'homeCtrl',
          controllerAs: 'home'
        })

        .otherwise({redirectTo: '/404'});

        $locationProvider.html5Mode(false).hashPrefix('!');

}]);
