import './calc';

describe('Calc Service', () => {
  // Get factory
  let Calc = null;
  beforeEach(angular.mock.module('api.utils'));
  beforeEach(inject((_Calc_) => {
    Calc = _Calc_;
  }));

  // Confirm factory exists
  it('should exist', () => {
    expect(Calc).toBeDefined();
  });
  
  // A set of tests for the Calc.add method
  describe('.add(arg1, arg2)', () => {
    // A simple test to verify the method add exists
    it('should exist', () => {
      expect(Calc.add).toBeDefined();
    });
    // Test adding two numbers
    it('should add two numbers', () => {
      expect(Calc.add(4, 1)).toEqual(5);
    });
  });
  
  // A set of tests for the Calc.subtract method
  describe('.subtract(arg1, arg2)', () => {
    // A simple test to verify the method subtract exists
    it('should exist', () => {
      expect(Calc.subtract).toBeDefined();
    });
    // Test subtracting two numbers
    it('should subtract two numbers', () => {
      expect(Calc.subtract(4, 1)).toEqual(3);
    });
  });
});