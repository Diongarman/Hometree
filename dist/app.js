"use strict";
console.log('App Running');
class App {
    constructor() {
        this.selectedTableCell = null;
        let elements = document.querySelectorAll("td");
        let button = document.getElementById("addToBasket");
        button.addEventListener("click", () => this.addToBasket());
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", (e) => this.onTableClick(e));
        }
    }
    onTableClick(e) {
        let td = e.target;
        let button = document.getElementById("addToBasket");
        //No td selected
        if (this.selectedTableCell === null) {
            this.selectedTableCell = td;
            td.classList.add('selected');
            button.style.setProperty('pointer-events', 'auto');
        }
        //same td selected ergo deselect
        else if (td === this.selectedTableCell) {
            td.classList.remove('selected');
            this.selectedTableCell = null;
            button.style.setProperty('pointer-events', 'none');
        }
        //New cell selected
        else {
            this.selectedTableCell.classList.remove('selected');
            this.selectedTableCell = td;
            td.classList.add('selected');
            button.style.setProperty('pointer-events', 'auto');
        }
    }
    addToBasket() {
        var _a;
        let td = this.selectedTableCell;
        let img = (_a = td) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        img.src = "/assets/tick.svg";
    }
}
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
