"use strict";
console.log('App Running');
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        this.tableToggle = false;
        var elements = document.querySelectorAll("td");
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", function (e) { return _this.onTableClick(e); });
        }
    }
    App.prototype.onTableClick = function (e) {
        this.tableToggle = !this.tableToggle;
        var td = e.target;
        var img = td.lastElementChild;
        if (this.tableToggle) {
            td.classList.add('selected');
            img.src = "/assets/tick.svg";
        }
        else {
            td.classList.remove('selected');
            img.src = "";
        }
    };
    App.prototype.handleChange = function (event) {
        console.log(event.style.set);
    };
    return App;
}());
;
new App();
/*

                                +++++++++++++
                                + RESOURCES +
                                +++++++++++++


                                ############
                                # SPECIFIC #
                                ############
DomTokenList: https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
Getting Class Name from MouseEvent: https://stackoverflow.com/questions/43638516/get-class-name-of-element-from-mouseevent-target
Clean DOM Queries in TS: https://medium.com/@mindplay/clean-dom-queries-in-typescript-c10f362d14fc


//https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
//https://www.w3schools.com/jsref/obj_cssstyledeclaration.asp
//https://www.w3schools.com/howto/howto_js_toggle_class.asp
//https://stackoverflow.com/questions/49226309/what-are-the-proper-typescript-types-for-addeventlistener-mousemove-and-its-eve




                                ###########
                                # GENERAL #
                                ###########

https://www.typescriptlang.org/docs/handbook/classes.html

*/
