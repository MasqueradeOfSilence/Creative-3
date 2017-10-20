angular.module('Schedule', ['ui.router'])
.factory('tableFactory', [function(){
  var o = {
    //table: [5][30][100],
    table: [],
    daysToAdd: [5],
    timeStrings: ["7:00",
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
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00"
    ]
  };
  return o;
}])
.controller('MainCtrl', [
  '$scope',
  'tableFactory',
  function($scope, tableFactory){
    $scope.table = tableFactory.table;
    for (var i = 0; i < 5; i++) {
      $scope.table[i] = [30];
    }
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 30; j++) {
        $scope.table[i][j] = [];
      }
    }
    console.log($scope.table);
    $scope.daysToAdd = tableFactory.daysToAdd;
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

    $scope.daysToAdd[0] = $scope.monday;
    $scope.daysToAdd[1] = $scope.tuesday;
    $scope.daysToAdd[2] = $scope.wednesday;
    $scope.daysToAdd[3] = $scope.thursday;
    $scope.daysToAdd[4] = $scope.friday;

    for (var i = 0; i < $scope.daysToAdd.length; i++) {
      if($scope.daysToAdd[i] == true) {
        var startIndex = 0;
        var endIndex = 29;
        for (var t = 0; t < $scope.timeStrings.length; t++) {
          if ($scope.timeStrings[t] == $scope.startTime) {
            startIndex = t;
          }
          if ($scope.timeStrings[t] == $scope.endTime) {
            endIndex = t;
          }
        }



        $scope.table[i][startIndex].push({
        //$scope.table[1][1].push({
          title: $scope.formContent
        });
        //$scope.table[i][startIndex].push($scope.formContent);
        //$scope.table.push($scope.formContent);
        for (var remainingCells = startIndex + 1; remainingCells < endIndex; remainingCells++) {
          $scope.table[i][remainingCells].push({});
        }
      }
    }
    console.log($scope.table);

/*
    $scope.table.push({
      title: $scope.formContent,
      upvotes: 0,
      comments: []
    });
    $scope.title = '';

    */
  };
/*
  $scope.incrementUpvotes = function(post) {
    //post.upvotes += 1;
  };
  */

}
])
