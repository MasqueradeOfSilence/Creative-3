angular.module('Schedule', ['ui.router'])
.factory('tableFactory', [function(){
  var o = {
    table: [5][28][],
    daysToAdd: [5],
    timeStrings = {"7:00",
      "7:30",
      "8:00",
      "8:30",
      "9:00",
      "9:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "1:00",
      "1:30",
      "2:00",
      "2:30",
      "3:00",
      "3:30",
      "4:00",
      "4:30",
      "5:00",
      "5:30",
      "6:00",
      "6:30",
      "7:00",
      "7:30",
      "8:00",
      "8:30",
      "9:00",
      "9:30"
    }
  };
  return o;
}])
.controller('MainCtrl', [
  '$scope',
  'tableFactory',
  function($scope, tableFactory){
    $scope.table = tableFactory.table;
    $scope.timeStrings = tableFactory.timeStrings;
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

    daysToAdd[0] = $scope.formContent.monday;
    daysToAdd[1] = $scope.formContent.tuesday;
    daysToAdd[2] = $scope.formContent.wednesday;
    daysToAdd[3] = $scope.formContent.thursday;
    daysToAdd[4] = $scope.formContent.friday;

    for (var i = 0; i < daysToAdd.length; i++) {
      if(daysToAdd[i] == true) {

      }
    }

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
