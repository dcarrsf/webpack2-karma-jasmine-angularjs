import './services/';
import './routes/';
import './directives/';
import './app.scss';

// Link to app and dependencies
angular.module('loginApp', [
  'api.services',
  'api.controllers',
  'api.directives',
  'ngRoute'
])
// Set up main controller
.controller('mainCtrl', ['$scope', 'Utils', ($scope, Utils) => {
  $scope.result = `${Utils.add(4, 1)}`;
}])
// Set up routing
.config(($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'home.html',
    controller: 'homeCtrl'
  })
  .when('/login', {
    templateUrl: 'login.html',
    controller: 'loginCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
