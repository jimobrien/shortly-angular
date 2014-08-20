angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.loading = true;

  $scope.addLink = function (link) {
    Links.create(link).success( function (data) {
      $scope.link = data;
      $scope.loading = false;
    });
  };
});
