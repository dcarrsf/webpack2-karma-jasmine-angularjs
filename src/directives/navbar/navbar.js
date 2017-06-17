import partial from './navbar.html';
import './navbar.scss';
/**
 * *******************************************************
 *
 *  Navbar navigation component.
 *
 *  @author     Dan Carr
 *  @date       June 2017
 *
 * *******************************************************
 */
export default () => {
  return {
    restrict: 'E',
    replace: true,
    template: partial,
    link: (scope, el, attrs) => {
      // do stuff...
    },
  };
};
