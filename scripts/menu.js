// resource <./bower_components/sap/TweenMax.js>

window.onload = function () {
    
    "use strict";
    var oppened = false;
    document.getElementById("showMenu").onclick = function () {
        if (false === oppened)
            showMenu();
        if (true === oppened)
            hideMenu();


        // show menu after click on the menu button
        function showMenu() {
            TweenMax.to("#left-nav", 0.3, {position: "absolute", left: "0px", onComplete: isOppened});
        }

        // hide menu after click on the menu button
        function hideMenu() {
            TweenMax.to("#left-nav", 0.1, {display: "none" , onComplete: isClosed});
        }

        // callback if the menu is shown
        // after click on the menu button
        function isOppened() {
            oppened = true;
        }

        // callback if menu is hidden 
        // after click on the menu button
        function isClosed() {
            var navigation = document.getElementById("left-nav");
            oppened = false;
            navigation.style.display = "block";
            navigation.style.position = "absolute";
            navigation.style.left = "-102%";
        }

        // hide menu after click on the 
        // menu item
        document.getElementById("left-nav").onclick = function () {
            TweenMax.to("#left-nav", 0.1, {display: "none", onComplete: isClosed});
        };
    };
};