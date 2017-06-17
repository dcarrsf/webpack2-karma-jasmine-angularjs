import app from '../../app';

describe('loginCtrl', function() {
  // Get controller
  let controller;
  const $scope = {};
  beforeEach(angular.mock.module('loginApp'));
  beforeEach(inject((_$controller_) => {
    controller = _$controller_('loginCtrl', { $scope: $scope });
  }));

  // Should exist
  it('should exist', () => {
    expect(controller).toBeDefined();
  });

  // Should change the number on $scope
  describe('$scope.number', () => {
    it('should exist', () => {
      expect($scope.number).toBeDefined();
    });
    it('sets the number', () => {
      expect($scope.number).toEqual(1000);
    });
  });
});;