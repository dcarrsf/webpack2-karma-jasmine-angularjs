import angular from 'angular';
import './services/utils/calc';
import './app.scss';

// Link to app
angular.module('ng-test', ['api.utils'])
// Set up main controller
.controller('ng-test-controller', ['$scope', 'Calc', ($scope, Calc) => {
  $scope.result = `${Calc.add(4, 1)}`;
}]);
