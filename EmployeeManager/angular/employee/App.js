'use strict';

var employeeApp = angular.module('employeeApp', ['ngRoute', 'ui.bootstrap']);

employeeApp.config(['$routeProvider', '$httpProvider', '$provide', function ($routeProvider, $httpProvider, $provide) {
    $routeProvider.when('/', {
        controller: 'EmployeeController',
        templateUrl: 'angular/employee/partials/main.html'
    })
    .otherwise({ redirectTo: '/' });

}]).service('employeeService', employeeService);