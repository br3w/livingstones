'use strict';
// Identify Module and  Controller
angular.module('livingstones.main', ['ngMaterial'])
//Directive formValidation
    .directive('formValidation', formValidation)
    .directive('inputSelectList', inputSelectList)
    .directive('jqueryEvents', jqueryEvents)
    .directive('passwordVerify', passwordVerify)
