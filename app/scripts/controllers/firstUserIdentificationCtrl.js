'use strict';
angular
    // Module indetification
    .module('livingstones.firstuseridentification', ['ngRoute','ngAnimate','ngMask'])

    // Controller name
    .controller('firstUserIdentificationCtrl', ['$scope','$http','$routeParams','$location', '$window',

        function($scope, $http, $routeParams, $location, $window) {
            $scope.accesso = true;
            $scope.view    = "identification";
            $scope.token   =   $routeParams.token || null;
            $scope.title   = "Carregando...";

            // Validation Email
            $scope.validationUrlEmail = function(){

                var data = {'ct': $scope.token};
                var url  = 'https://pqbl2deo53.execute-api.us-west-2.amazonaws.com/test/registration';

                $http.post(url, data)

                    .success(function (data, status, headers, config) {

                        if( data.status === "success"){
                            var host = $window.location.host;
                            var url = './#!/login';
                            $window.location.href = url;
                        } else {
                            $scope.title   = "Accesso Negado!";
                            $scope.accesso = false;
                        }
                    })

                    .error(function (data, status) {
                        //console.log('Erro', data);
                    });
            }();
        }
    ]);
