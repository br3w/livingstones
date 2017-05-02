'use strict';

angular
    .module('livingstones', [

     // Dependencies
      'ngMask',
      'ngAria',
      'ngRoute',
      'ngAnimate',
      'ngMessages',
      'ngSanitize',
      'ngMaterial',

      // User content controller
      'livingstones.main',
      'livingstones.home'

  ]);
