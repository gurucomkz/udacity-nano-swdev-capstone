'use strict';

describe('Controller: TripCtrl', function () {

  // load the controller's module
  beforeEach(module('capstoneApp'));

  var TripCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TripCtrl = $controller('TripCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TripCtrl.awesomeThings.length).toBe(3);
  });
});
