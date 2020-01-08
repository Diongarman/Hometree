"use strict";
console.log('App Running');
var App = /** @class */ (function () {
    function App() {
        var _this = this;
        var _a;
        this.selectedTableCell = null;
        var elements = document.querySelectorAll("td");
        (_a = document.getElementById("addToBasket")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return _this.addToBasket(); });
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", function (e) { return _this.onTableClick(e); });
        }
    }
    App.prototype.onTableClick = function (e) {
        var _a, _b, _c;
        var td = e.target;
        var button = document.getElementById("addToBasket");
        //No td selected
        if (this.selectedTableCell === null) {
            this.selectedTableCell = td;
            td.classList.add('selected');
            (_a = button) === null || _a === void 0 ? void 0 : _a.style.setProperty('pointer-events', 'auto');
        }
        //same td selected ergo deselect
        else if (td === this.selectedTableCell) {
            td.classList.remove('selected');
            this.selectedTableCell = null;
            (_b = button) === null || _b === void 0 ? void 0 : _b.style.setProperty('pointer-events', 'none');
        }
        //New cell selected
        else {
            this.selectedTableCell.classList.remove('selected');
            this.selectedTableCell = td;
            td.classList.add('selected');
            (_c = button) === null || _c === void 0 ? void 0 : _c.style.setProperty('pointer-events', 'auto');
        }
    };
    App.prototype.addToBasket = function () {
        var _a;
        var img = (_a = this.selectedTableCell) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        img.src = "/assets/tick.svg";
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
