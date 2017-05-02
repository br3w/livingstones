'use strict';

    angular

    // Module indetification
    .module('livingstones')

    // Factory service
    .factory('headerInperceptorFactory', ['$location','$window', 'dataUserFactory',

        function($location, $window, dataUserFactory){

            return {

                request: function (config) {

                    // if(localStorage.getItem('dataUser')){
                    //
                    //     var data =  angular.fromJson(dataUserFactory.getData());
                    //
                    //     if(data['Authorization'] && data['Authorization'] !== null ){
                    //
                    //         config.headers['Authorization'] = data['Authorization'];
                    //         config.headers['Accept'] = 'application/json;odata=verbose';
                    //         config.headers['Content-Type'] = 'application/json;charset=utf-8';
                    //
                    //     } else {
                    //
                    //         config.headers['Accept'] = 'application/json;odata=verbose';
                    //         config.headers['Content-Type'] = 'application/json;charset=utf-8';
                    //
                    //         if($window.location.hash.indexOf('#!/user/') == 0){
                    //             var url = './#!/login';
                    //             $window.location.href = url;
                    //         }
                    //     }
                    // } else {
                    //
                    //     config.headers['Accept'] = 'application/json;odata=verbose';
                    //     config.headers['Content-Type'] = 'application/json;charset=utf-8';
                    //
                    //     if($window.location.hash.indexOf('#!/user/') == 0){
                    //         var url = './#!/login';
                    //         $window.location.href = url;
                    //     }
                    // }
                    
                    return config;
                }
            };
    }]);
