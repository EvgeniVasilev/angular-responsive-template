// resource <./app/app.js,./bower_components/angular-route/angular-route.js,./bower_components/angular-route/angular-route.js, ./bower_components/angular-animate/angular-animate.js>
"use strict";
var mobileApp = angular.module("mobileApp", ["ngRoute", "ngAnimate", "pascalprecht.translate"]);

// learn mobileApp new languages
mobileApp.config(function ($translateProvider) {
    $translateProvider.translations("bg", {
        "ABOUT_US": "За нас",
        "CONTACT_US": "Контакти",
        "CAREERS": "Работа",
        "SOME_PAGE": "Друга страница",
        "BULGARIAN": "Български",
        "ENGLISH": "English",
        "RUSSIAN": "Руский",
        "FULL_NAME": "Трите имена",
        "EMAIL": "Електронна поща",
        "MESSAGE": "Съобщение",
        "SEND_MESSAGE": "Изпрати съобщението",
        "ERROR": "Моля, попълнете полето!",
        "EMAIL_ERROR": "Моля, въведете валиден и-мейл!",
        "SUCCESS": "Вашето съобщение беше успешно изпртатено! Благодарим Ви, че използвахте нашите услуги!"
    })
            .translations("en", {
                "ABOUT_US": "About Us",
                "BULGARIAN": "Bulgarian",
                "CONTACT_US": "Contact Us",
                "CAREERS": "Careers",
                "SOME_PAGE": "Some Page",
                "ENGLISH": "English",
                "RUSSIAN": "Russian",
                "FULL_NAME": "Full Name",
                "EMAIL": "E-mail",
                "MESSAGE": "Message",
                "SEND_MESSAGE": "Send Messge",
                "ERROR": "Please, fill in the field!",
                "EMAIL_ERROR": "Please, fill in the valid e-mail!",
                "SUCCESS": "Your message was successfully send! Thank you for using our services!"
            })
            .translations("ru", {
                "ABOUT_US": "О нас",
                "BULGARIAN": "Български",
                "CONTACT_US": "Контакты",
                "CAREERS": "Работа",
                "SOME_PAGE": "Другая страница",
                "ENGLISH": "English",
                "RUSSIAN": "Руский",
                "FULL_NAME": "Полное имя",
                "EMAIL": "Електронная почта",
                "MESSAGE": "Съобщение",
                "SEND_MESSAGE": "Изпрати съобщение",
                "ERROR": "Пожалуста, пополните!",
                "EMAIL_ERROR": "Пожалуста, пополните настоящий и-мейл!",
                "SUCCESS": "Вашето съобщение беше успешно изпртатено! Благодарим Ви, че използвахте нашите услуги!"
            });

    $translateProvider.preferredLanguage('bg');

});

mobileApp.controller("mobileAppCtrl", ["$scope", "$translate", function ($scope, $translate) {
        $scope.tab = ""
        $scope.changeLanguage = function (key) {
            $scope.tab = key;
            $translate.use(key);
        };
    }]);