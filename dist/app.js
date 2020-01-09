"use strict";
console.log('App Running');
class App {
    constructor() {
        this.selectedTableCell = [null, false];
        this.basketSize = 0;
        let elements = document.querySelectorAll("td");
        let button = document.getElementById("addToBasket");
        button.addEventListener("click", () => this.addToBasket());
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", (e) => this.onTableClick(e));
        }
    }
    isInBasket() {
        var _a;
        let td = this.selectedTableCell[0];
        let img = (_a = td) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        let button = document.getElementById("addToBasket");
        button.style.setProperty('pointer-events', 'none');
        //if cell has previously been selected then state will reflect that 
        if (!img.src.includes('tick.svg')) {
            button.style.setProperty('pointer-events', 'auto');
        }
    }
    onTableClick(e) {
        //e is passed in from selected td cell
        let td = e.target;
        //No td selected
        if (this.selectedTableCell[0] === null) {
            this.selectedTableCell[0] = td;
            td.classList.add('selected');
            this.isInBasket();
        }
        //same td selected ergo deselect
        else if (td === this.selectedTableCell[0]) {
            td.classList.remove('selected');
            this.selectedTableCell[0] = null;
            this.isInBasket();
        }
        //New cell selected
        else {
            this.selectedTableCell[0].classList.remove('selected');
            //update state to new selected cell
            this.selectedTableCell[0] = td;
            td.classList.add('selected');
            this.isInBasket();
        }
    }
    addToBasket() {
        var _a;
        let td = this.selectedTableCell[0];
        let img = (_a = td) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        let basketQty = document.getElementById('qty-centered');
        if (!img.src.includes('tick.svg')) {
            img.src = "/assets/tick.svg";
            this.basketSize++;
            basketQty.innerText = this.basketSize.toString();
            this.isInBasket();
        }
        //document.getElementById("addToBasket")?.style.setProperty('pointer-events','none');
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
