(function () {
    'use strict';

    angular.module('App.Services', [])
        .service('ParseService', function ($http) {

            var baseURL = "https://api.parse.com/1/";
            var authenticationHeaders = PARSE__HEADER_CREDENTIALS;

            return {
                /**
                 * default function for logging in user
                 */
                login: function () {

                    var settings = {
                        headers: authenticationHeaders,
                        // params are for query string parameters
                        params: {
                            "username": "admin",
                            "password": "test"
                        }
                    };

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.get(baseURL + 'login', settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('login', response);
                            return response.data;
                        });
                },
                /**
                 * returns all of the data
                 */
                getAllObjects: function (_id) {

                    var settings = {
                        headers: authenticationHeaders
                    };

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.get(baseURL + 'classes/stuff/', settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('getAllObjects', response);
                            return response.data;
                        });
                },
                /**
                 * returns individual object by Id
                 */
                getObjectById: function (_id) {

                    var settings = {
                        headers: authenticationHeaders
                    };

                    // $http returns a promise, which has a then function,
                    // which also returns a promise
                    return $http.get(baseURL + 'classes/stuff/' + _id, settings)
                        .then(function (response) {
                            // In the response resp.data contains the result
                            // check the console to see all of the data returned
                            console.log('getObjectById', response);
                            return response.data;
                        });
                }
            }

        })
})();
