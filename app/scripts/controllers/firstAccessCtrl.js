'use strict';

angular

    // Module indetification
    .module('livingstones.firstaccess', ['ngRoute','ngAnimate','ngMask'])

    // Controller name
    .controller('firstAccessCtrl', ['$q','$scope','$http','$routeParams','$location', '$window', '$timeout', 'dataUserFactory',

        function($q, $scope, $http, $routeParams, $location, $window, $timeout, dataAuthFactory ) {

            $scope.access   = null;
            $scope.load     = "loading";
            $scope.view     = "first-access";
            $scope.bemtivi  = true;
            $scope.title    = "Carregando...";
            $scope.token    =  $routeParams.token || null;

            // Submit Token Validation
            $scope.validationAccessToken = function() {

                var config = {
                    headers : {
                        'Content-Type': 'application/json;charset=utf-8;'
                    }
                };
                var url  = 'https://pqbl2deo53.execute-api.us-west-2.amazonaws.com/test/registration';
                var data = {'rt': $scope.token };


                $http.post(url, data, config)

                    .success(function (data, status, headers, config) {

                        var auth = data['Authorization'] || null;

                        if( auth !== null){
                            $scope.access = true;
                            $scope.title = "Bem-Vindo";
                            dataAuthFactory.setData(auth);
                            $scope.load = "loaded";

                        } else {
                            $scope.access  = false;
                            $scope.bemtivi = false;
                            $scope.title = "Acesso Negado";
                            localStorage.removeItem('dataAuth');
                            $scope.load = "loaded";
                        }
                    })

                    .error(function (data, status, header, config) {
                        //console.log(data);
                    });


            }();
        }
    ]);
