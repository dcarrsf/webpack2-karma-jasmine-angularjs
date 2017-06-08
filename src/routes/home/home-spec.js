import app from '../../app';

describe('homeCtrl', function() {
  // Get controllers
  let controller;
  const $scope = {};
  beforeEach(angular.mock.module('loginApp'));
  beforeEach(inject((_$controller_) => {
    controller = _$controller_('homeCtrl', { $scope: $scope });
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
      expect($scope.number).toEqual(20);
    });
  });
});