import angular from 'angular';
import ngRoute from 'angular-route';
import './services/utils/';
import './controllers/pages/';
import './directives/pages/';
import './app.scss';

// Link to app and dependencies
angular.module('loginApp', [
  'api.utils', 
  'api.controllers',
  'api.directives',
  'ngRoute'
])
// Set up main controller
.controller('mainCtrl', ['$scope', 'Calc', ($scope, Calc) => {
  $scope.result = `${Calc.add(4, 1)}`;
}])
// Set up routing
.config(($routeProvider) => {
    $routeProvider
    .when('/', {
        templateUrl : 'home.html',
        controller : "homeCtrl"
    })
    .when('/login', {
        templateUrl : 'login.html',
        controller : "loginCtrl"
    })
    .otherwise('/')
});;
