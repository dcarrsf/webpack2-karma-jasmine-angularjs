// Make sure the app loads (top-level)
describe('app', () => {
  // Should load
  it('loads without problems', () => {
    require('./app');
  });
});

// Test the mainStrl as well
describe('mainCtrl', () => {
  // Get controller
  let controller;
  const $scope = {};
  beforeEach(angular.mock.module('loginApp'));
  beforeEach(inject((_$controller_) => {
    controller = _$controller_('mainCtrl', { $scope: $scope });
  }));

  // Confirm controller exists
  it('should exist', () => {
    expect(controller).toBeDefined();
  });

  // Should change the number on $scope
  describe('$scope.number', () => {
    it('should exist', () => {
      expect($scope.number).toBeDefined();
    });
    it('sets the number', () => {
      expect($scope.number).toEqual(5);
    });
  });
});
