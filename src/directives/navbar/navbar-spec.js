import app from '../../app';
/**
 * *******************************************************
 *
 *  Navbar spec.
 *
 *  @author     Dan Carr
 *  @date       June 2017
 *
 * *******************************************************
 */
describe('Unit testing nav-bar', function() {
  let $compile, $rootScope;
  // Load the myApp module, which contains the directive
  beforeEach(angular.mock.module('loginApp'));
  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject((_$compile_, _$rootScope_) => {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replaces the element with the appropriate content', () => {
    // Compile a piece of HTML containing the directive
    const element = $compile("<nav-bar></nav-bar>")($rootScope);
    // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toBeDefined(); // TODO: Better test!
  });
});