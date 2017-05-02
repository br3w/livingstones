'use strict';

angular

  .module('livingstones.landpage', ['ngRoute','ngAnimate','ngMask'])

    .controller('landpageCtrl', ['$scope',

      function($scope) {
          $scope.load       = "loaded";
          $scope.content    = "home";
          $scope.view       = "landpage";
          $scope.headertxt  = true;
    }
]);
