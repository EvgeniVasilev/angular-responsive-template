/* global mobileApp */
// resource <./app/app.js, ./bower_components/angular-route/angular-route.js>

mobileApp.config(["$routeProvider", function ($routeProvider) {
        "use strict";
        $routeProvider
                .when("/", {
                    templateUrl: "./views/index.html",
                    controllerr: function () {
                        // Todo code
                    }
                })
                .when("/contacts", {
                    templateUrl: "./views/contacts.html",
                    controller: function ($scope, $window) {
                        $scope.isValidForm = function () {
                            if (!$scope.myForm.$valid) {
                                return;
                            }
                            if ($scope.myForm.$valid) {
                                var host = $window.location.hostname;
                                var path = $window.location.pathname;
                                var port = $window.location.port;
                                alert("Cooll, your messge will be send, if someone adds backendq of course! \n :-)");

                                $window.location = "http://" + host + ":" + port + path + "#/complete";

                                // Todo send to server
                            }


                        };
                    }
                })
                .when("/complete", {
                    templateUrl: "./views/complete.html",
                    controller: function ($scope) {
                        // Todo code
                    }
                })
                .when("/careers", {
                    templateUrl: "./views/careers.html",
                    controller: function ($scope) {
                        // Todo code
                    }
                })
                .otherwise({redirectTo: "/"});
    }]);