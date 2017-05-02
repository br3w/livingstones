'use strict';

    angular
    // Module indetification
    .module('livingstones.main')
    // Controller name
    .controller('mainCtrl', [ '$scope', '$timeout', '$mdSidenav', '$log',

        function($scope, $timeout, $mdSidenav, $log) {

            $scope.toggleLeft = buildDelayedToggler('sidebarleft');
            $scope.toggleRight = buildToggler('sidebarright');
            $scope.isOpenRight = function(){
                //return $mdSidenav('sidebarright').isOpen();
            };

            $scope.close = function (navID) {
                // Component lookup should always be available since we are not using `ng-if`
                $mdSidenav(navID).close()
                .then(function () {
                    $log.debug("close LEFT is" + navID);
                });
            };

            function debounce(func, wait, context) {
                var timer;
                return function debounced() {
                var context = $scope,
                    args = Array.prototype.slice.call(arguments);
                    $timeout.cancel(timer);
                    timer = $timeout(function() {
                    timer = undefined;
                    func.apply(context, args);
                    }, wait || 10);
                };
            }

            function buildDelayedToggler(navID) {
                return debounce(function() {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
                }, 200);
            }

            function buildToggler(navID) {
                return function() {
                    // Component lookup should always be available since we are not using `ng-if`
                    $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
                };
            }
        }
    ]);
