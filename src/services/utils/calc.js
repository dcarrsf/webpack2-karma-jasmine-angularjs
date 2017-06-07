import angular from 'angular';
/**
 * *******************************************************
 *
 *  The Calc service holds methods for testing calculations.
 *
 *  @author     Dan Carr
 *  @date       February 2017
 *
 * *******************************************************
 */
// Define utils module
angular.module('api.utils', [])
// Add Calculator service
.factory('Calc', () => {
  return {
    add: (arg1, arg2) => {
      return arg1 + arg2;
    },
    subtract: (arg1, arg2) => {
      return arg1 - arg2;
    }
  };
});
