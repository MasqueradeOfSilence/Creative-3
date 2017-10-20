angular.module('Schedule', ['ui.router'])
.factory('tableFactory', [function(){
  var o = {
    table: [5][28]
  };
  return o;
}])
.controller('MainCtrl', [
  '$scope',
  'tableFactory',
  function($scope, tableFactory){
    $scope.posts = tableFactory.table;
    //$scope.test = 'Hello world!';

    /*  $scope.posts = [
    {title:'Post 1', upvotes:5},
    {title:'Post 2', upvotes:6},
    {title:'Post 3', upvotes:1},
    {title:'Post 4', upvotes:4},
    {title:'Post 5', upvotes:3}
  ];*/

  $scope.addClass = function(){
    if($scope.formContent === '') { return; }



    $scope.table.push({
      title: $scope.formContent,
      upvotes: 0,
      comments: []
    });
    $scope.title = '';
  };

  $scope.incrementUpvotes = function(post) {
    //post.upvotes += 1;
  };

}
])
