angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.links = [];

  var init = function () {
    $scope.getLinks();
  };

  $scope.getLinks = function () {
    Links.get().success( function (data) {
      console.log(data);
      $scope.data.links = data;
    });
  };

  console.log(typeof $scope.getLinks);

  init();
});


/* 

angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  $scope.links = [];

  $scope.init = function () {
    console.log('intialize links controller');
    $scope.getLinks();
  };

  $scope.getLinks = function () {
    Links.get().then( function (data) {
      $scope.data.links = data;
    });
  };

  $scope.getLinks();
});


*/