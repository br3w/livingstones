'use strict';

    angular
    // Module indetification
    .module('livingstones.loginremember', ['ngRoute','ngAnimate','ngMask'])
    // Controller name
    .controller('loginRememberCtrl', ['$scope', '$rootScope', '$http','$interval','$window',

        function($scope, $rootScope, $http, $interval, $window ) {

            $scope.load     = "loaded";
            $scope.content  = "remember";
            $scope.status   = "start";

            // Set data for login
            $scope.rememberUserPassword = function(isValid){

                if(isValid){

                    $scope.load = 'loading';

                    var data = $scope.remember;
                    var url  = 'https://pqbl2deo53.execute-api.us-west-2.amazonaws.com/test/user/password';

                    $http.post(url, data)

                        .success(function (data, status) {

                            if(data.status == "error"){
                                $scope.status = 'error';
                            } else {
                                $scope.status = 'success';
                            }
                        })

                        .error(function (data, status) {
                            $scope.status = 'error';
                        });
                }
            }
        }
    ]);
