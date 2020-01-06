"use strict";
console.log('hello world');
var App = /** @class */ (function () {
    function App() {
        this.onTableClick = function (event) {
            console.log("rick sticked");
            console.log(event);
        };
        var elements = document.querySelectorAll("td");
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", this.onTableClick);
        }
    }
    return App;
}());
;
new App();
