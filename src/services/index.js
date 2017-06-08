import Utils from './utils/utils';
/**
 * *******************************************************
 *
 *  Add services to api module.
 *
 *  @author     Dan Carr
 *  @date       February 2017
 *
 * *******************************************************
 */
// Define controllers module
angular.module('api.services', [])
// Utils service
.factory('Utils', Utils);
