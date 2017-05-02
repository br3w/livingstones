'use strict';
angular
    // Module indetification
    .module('livingstones.firstusercreate', ['ngRoute','ngAnimate','ngMask'])

    // Controller name
    .controller('firstUserCreateCtrl', ['$scope','$http','$routeParams','$location', '$window', '$timeout',

        function($scope, $http, $routeParams, $location, $window, $timeout) {

            $scope.token    =  $routeParams.token || null;
            $scope.show     =  true;
            $scope.load     = "loading";
            $scope.view     = "user-create";
            $scope.title    = "Cadastro";
            $scope.success  =  null;

            $scope.submitNewUser  = function(isValid){

                if(isValid){

                    $scope.status  = "loading";

                    var config = {
                        headers : {
                            'Content-Type': 'application/json;charset=utf-8;',
                            "Authorization": localStorage.getItem('dataUser')
                        }
                    };

                    var data = $scope.create;
                    var url  = 'https://pqbl2deo53.execute-api.us-west-2.amazonaws.com/test/user';

                    $http.post(url, data, config)

                    .success(function (data, status, headers, config) {
                        if( data.status === "success"){
                            $scope.show = false;
                        } else {
                            $scope.status  = "error";
                            $scope.message = data.message;
                        }
                    })

                    .error(function (data, status, header, config) {
                        //console.log('Erro', data);
                    });
                }
            }

        $scope.load = "loaded";

        }
    ]);
