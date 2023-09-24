
var controllers = {};

controllers.HeaderController = function($scope, $location,$window) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
};

controllers.ApplyCtrl = function($scope, $location) {

  $scope.applyCA = function() {
    alert('The Canadian deadline for the GM Women\'s Retail Network scholarship has passed.  No additional Canadian applications are being accepted at this time.');
  };
  $scope.applyUS = function() {
    alert('The US deadline for the GM Women\'s Retail Network scholarship has passed.  No additional US applications are being accepted at this time.');
  };
};
gmsacApp.controller(controllers);
