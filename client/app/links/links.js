angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  Links.getAll().then(function(d) {
    console.log('this is d: ', d);
    $scope.data.links = d;
    console.log('this is scope.data.links: ', $scope.data.links);
  });
});
