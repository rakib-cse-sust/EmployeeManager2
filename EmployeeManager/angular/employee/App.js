'use strict';

var employeeApp = angular.module('employeeApp', ['ngRoute', 'ui.bootstrap']);

employeeApp.config(['$routeProvider', '$httpProvider', '$locationProvider', function ($routeProvider, $httpProvider, $locationProvider) {

    $routeProvider.when('/', {
        controller: 'EmployeeController',
        templateUrl: 'angular/employee/partials/main.html'
    })
    .otherwise({ redirectTo: '/' });

    //$locationProvider.hashPrefix('!').html5Mode(true);

    //$locationProvider.html5Mode(true);

}]).service('employeeService', employeeService);