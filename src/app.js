/**
 * *******************************************************
 *
 *  The loginApp module, dependencies, controller, and routing.
 *  (Bundling entry-point for the app)
 *  
 *  @author     Dan Carr
 *  @date       June 2017
 *
 * *******************************************************
 */
// API
import './services/';
import './routes/';
import './directives/';
// CSS
import './app.scss';
// Partials
import homeTpl from './routes/home/home.html';
import loginTpl from './routes/login/login.html';

// 1. Bootstrap app
angular.module('loginApp', [
  'api.services',
  'api.controllers',
  'api.directives',
  'ngRoute'
])
// 2. Set up main controller
.controller('mainCtrl', ['$scope', 'Utils', ($scope, Utils) => {
  $scope.result = `${Utils.add(4, 1)}`;
}])
// 3. Set up routing
.config(['$routeProvider', ($routeProvider) => {
  $routeProvider
  .when('/', {
    controller: 'homeCtrl',
    template: homeTpl
  })
  .when('/login', {
    controller: 'loginCtrl',
    template: loginTpl
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
