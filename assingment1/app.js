angular.module('firstApp',['ionic'])
.controller('NameController', function($scope) {
  $scope.age = "22"
  $scope.phonenumber = "(347)256-0610"
  $scope.occupation = "Student:Howard University"
   $scope.myName = "Robert Deary-Andall"

   $scope.fullName = {
      "first" : "Robert",
      "last"  : "Deary-Andall"


   };
});
