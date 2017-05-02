'use strict';

    angular
    // Module indetification
    .module('livingstonesMedic.confirm', ['ngRoute','ngAnimate','ngMask'])
    // Controller name
    .controller('confirmCtrl', ['$scope', '$rootScope', '$http',

        function($scope, $rootScope, $http ) {

            // Name view call
            $scope.content = 'confirm';

        }
    ]);
