import angular from 'angular';
import homeCtrl from './homeCtrl';
import loginCtrl from './loginCtrl';
/**
 * *******************************************************
 *
 *  Add controllers to api module.
 *
 *  @author     Dan Carr
 *  @date       February 2017
 *
 * *******************************************************
 */
// Define controllers module
angular.module('api.controllers', [])
// Home controller
.controller('homeCtrl'. homeCtrl)
// Login controller
.controller('loginCtrl'. loginCtrl);