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
                    controller: function () {
                        // Todo code
                    }
                })
                .when("/careers", {
                    templateUrl: "./views/careers.html",
                    controller: function () {
                        // Todo code
                    }
                })
                .otherwise({redirectTo: "/"});
    }]);