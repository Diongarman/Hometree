"use strict";
console.log('hello world');
var App = /** @class */ (function () {
    function App() {
        this.init = (function bar() {
            var elements = document.querySelectorAll("td");
            for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener("click", function () {
                    console.log("ricked");
                });
            }
        }());
    }
    return App;
}());
;
new App();
