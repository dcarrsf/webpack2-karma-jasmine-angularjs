/**
 * *******************************************************
 *
 *  The Utils service holds methods for testing calculations.
 *
 *  @author     Dan Carr
 *  @date       February 2017
 *
 * *******************************************************
 */
// Define utils
export default () => {
  // Private here...
  return {
    add: (arg1, arg2) => {
      return arg1 + arg2;
    },
    subtract: (arg1, arg2) => {
      return arg1 - arg2;
    }
  };
};
