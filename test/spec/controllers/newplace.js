'use strict';

describe('Controller: NewplaceCtrl', function () {

  // load the controller's module
  beforeEach(module('capstoneApp'));

  var NewplaceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewplaceCtrl = $controller('NewplaceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewplaceCtrl.awesomeThings.length).toBe(3);
  });
});
