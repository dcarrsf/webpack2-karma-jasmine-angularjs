import './utils';

describe('Utils Service', () => {
  // Get factory
  let Utils = null;
  beforeEach(angular.mock.module('api.services'));
  beforeEach(inject((_Utils_) => {
    Utils = _Utils_;
  }));

  // Confirm factory exists
  it('should exist', () => {
    expect(Utils).toBeDefined();
  });
  
  // A set of tests for the Calc.add method
  describe('.add(arg1, arg2)', () => {
    // A simple test to verify the method add exists
    it('should exist', () => {
      expect(Utils.add).toBeDefined();
    });
    // Test adding two numbers
    it('should add two numbers', () => {
      expect(Utils.add(4, 1)).toEqual(5);
    });
  });
  
  // A set of tests for the Calc.subtract method
  describe('.subtract(arg1, arg2)', () => {
    // A simple test to verify the method subtract exists
    it('should exist', () => {
      expect(Utils.subtract).toBeDefined();
    });
    // Test subtracting two numbers
    it('should subtract two numbers', () => {
      expect(Utils.subtract(4, 1)).toEqual(3);
    });
  });
});