'use strict';

    angular

    // Module indetification
    .module('livingstones')

    // Factory service
    .factory('dataUserFactory', ['$rootScope', '$window',

        function ($rootScope, $window) {

            return {
                setData: function(data) {
                    $window.localStorage && $window.localStorage.setItem('dataUser', JSON.stringify(data));
                    return this;
                },
                getData: function() {
                    return $window.localStorage && $window.localStorage.getItem('dataUser');
                }
          };

    }]);
