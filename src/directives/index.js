import navbar from './navbar/navbar';
/**
 * *******************************************************
 *
 *  Add directives to api module.
 *
 *  @author     Dan Carr
 *  @date       February 2017
 *
 * *******************************************************
 */
// Define controllers module
angular.module('api.directives', [])
// Navbar component
.directive('navBar', navbar);
