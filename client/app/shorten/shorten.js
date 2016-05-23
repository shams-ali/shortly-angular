angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(link) {
    $scope.link.url = link;
    $scope.link.data = {};
    $scope.link.data.url = link;
    $scope.link.data.title = link;
    $scope.link.status = 201;

    console.log('this is link in controller add link: ', link);
    console.log('this is scope.link in controller: ', $scope.link);
    Links.addOne($scope.link);
  };
});
