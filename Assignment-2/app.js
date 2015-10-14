(function () {
    'use strict';
    angular.module('serviceParseApp', ['ionic','App.Services'])
        .controller('MainController', function ($scope, ParseService) {

            $scope.itemsList = [];


            function populateList() {
                return ParseService.getAllObjects()
            }

            ParseService.login().then(function (_loggedInUser) {
                // successful response from the service, the user is
                // logged in and we have a user object
                alert("User Logged In " + _loggedInUser.username);

                // now that we are logged in, lets get some data..
                return populateList();
            }).then(function (_listData) {

                // successful response from server with data, lets
                // assign to scope variable to display in index.html
                $scope.itemsList = _listData.results;

            }, function error(_errorResponse) {
                // if error occurred anywhere above, this code will
                // be executed
                alert("ERROR " + _errorResponse);
            });


        });
})();
