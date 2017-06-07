import angular from 'angular';
import './app.scss';

// Link to app
angular.module('ng-test', [])
// Set up main controller
.controller('ng-test-controller', ['$scope', ($scope) => {
  $scope.result = 10;
}]);
