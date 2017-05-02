'use strict';

angular

  .module('livingstones.loginpasswordupdate', ['ngRoute','ngAnimate','ngMask'])

    .controller('loginPasswordUpdateCtrl', [ '$scope', '$routeParams', '$location', '$http', '$window', 'dataUserFactory',

      function($scope, $routeParams, $location, $http, $window, dataUserFactory ) {

          $scope.load     = "loaded";
          $scope.content  = "passwordupdate";
          $scope.status   = "start";
          var $id         =  $routeParams.id || null;

          // Set data for login
          $scope.userUpdatePassword = function(isValid){

              if(isValid){

                  $scope.load = 'loading';

                  var data = {
                      "pt":$id,
                      "password":$scope.update.password,
                      "password_confirmation":$scope.update.password_confirmation
                  }

                  var url  = 'https://pqbl2deo53.execute-api.us-west-2.amazonaws.com/test/user/password/change';

                  $http.post(url, data)

                      .success(function (data, status) {
                          if(data.status == "error"){
                              $scope.status = "error";
                              $scope.message = data.message;
                          } else {
                              $scope.status = 'success';
                          }
                      })

                      .error(function (data, status) {
                          $scope.status = "error";
                          $scope.message = data.message;
                      });
              }
          }
      }
]);
