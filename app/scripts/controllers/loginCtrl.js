'use strict';

angular

  .module('livingstones.login', ['ngRoute','ngAnimate','ngMask'])

    .controller('loginCtrl', [ '$scope', '$location', '$http', '$window', 'dataUserFactory',

      function($scope, $location, $http, $window, dataUserFactory ) {

          localStorage.removeItem('dataUser');
          localStorage.removeItem('dataJson');
          localStorage.removeItem('dataResult');

          $scope.load     = "loaded";
          $scope.content  = "login";

          $scope.submitLogin = function(isValid) {

              if(isValid){

                  $scope.status = "loading";

                  var data = $scope.patient;
                  var url  = 'https://pqbl2deo53.execute-api.us-west-2.amazonaws.com/test/login';

                  $http.post(url, data)

                      .success(function (data, status) {

                          if(data.status == "error"){
                              $scope.status   = "error";
                              $scope.message  = data.message;
                              $scope.load     = "loaded";
                          } else {

                              dataUserFactory.setData(data);

                              if(data.pendencies.length == 0){
                                    var dash = './#!/user/dash';
                                    $window.location.href = dash;
                              }else{
                                  var nameModulo = data.pendencies[0];
                                  var report = './#!/user/modulo/'+nameModulo+'/0';
                                  return $window.location.href = report;
                              }
                          }
                      })

                      .error(function (data, status) {

                      });
              }
          }
      }

]);
