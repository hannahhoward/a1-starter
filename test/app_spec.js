import "../src/app/app.js"
import "angular-mocks"

describe("App Component", function() {
  var scope, element;
  beforeEach(function() {
    angular.mock.module("myApp");
    angular.mock.inject(function($rootScope, $compile) {
      element = "<app></app>";
      element = $compile(element)($rootScope)
      $rootScope.$digest();
    });
  })
  it("should compile", function() {
    expect(element.find("p")[0].innerHTML).toEqual("Awesome Hello!");
  });
});
