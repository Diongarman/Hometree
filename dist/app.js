"use strict";
class App {
    //Logic below initialises State of object
    constructor() {
        this.selectedTableCell = null;
        this.basketSize = 0;
        this.favouriteIndex = parseInt(sessionStorage.faveIndex, 10) ? parseInt(sessionStorage.faveIndex, 10) : -1;
        let elements = document.querySelectorAll("td");
        let button = document.getElementById("addToBasket");
        let faveButton = document.getElementById("addToFave");
        //order matters here, because...
        this.enumerateTdEls(elements);
        //...handlers' logic is based on tds being enumerated first
        this.setUpClickHandlers(elements, (e) => {
            this.onTableClick(e);
        });
        this.styleCurrFavOnLoad(elements);
        button.addEventListener("click", () => this.addToBasket(this.selectedTableCell));
        //update to be able to toggleFave later though
        //toggle fave button will only work when on the current favourite td or if there is no fave
        faveButton.addEventListener("click", () => this.saveFavourite());
    }
    //constructor helper
    setUpClickHandlers(el, handler) {
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener('click', handler);
            el[i].children[0].addEventListener("click", (e) => {
                e.stopPropagation();
            });
        }
    }
    //constructor helper
    enumerateTdEls(el) {
        //Enumerate td cells so can refer to them in this objects state.
        //reason to refer to them is so that we can remember favourited td
        for (let i = 0; i < el.length; i++) {
            el[i].title = i.toString();
        }
    }
    //constructor helper
    styleCurrFavOnLoad(el) {
        for (let i = 0; i < el.length; i++) {
            if (i === parseInt(sessionStorage.faveIndex, 10)) {
                this.addToBasket(el[i]);
                el[i].click();
            }
        }
    }
    addToBasket(td) {
        var _a;
        let img = (_a = td) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        img.src = "/assets/tick.svg";
        this.incrementBasketCount();
        this.toggleAddToBasketButton();
    }
    removeFromBasket(tdIndex) {
        var _a;
        let td = document.querySelectorAll("td")[tdIndex];
        let img = (_a = td) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        img.src = "";
        this.decrementBasketCount();
    }
    //helper
    incrementBasketCount() {
        let basketQty = document.getElementById('qty-centered');
        this.basketSize++;
        basketQty.innerText = this.basketSize.toString();
    }
    //helper
    decrementBasketCount() {
        let basketQty = document.getElementById('qty-centered');
        this.basketSize--;
        basketQty.innerText = this.basketSize.toString();
    }
    saveFavourite() {
        var _a;
        let td = this.selectedTableCell;
        let tdIndex = (_a = td) === null || _a === void 0 ? void 0 : _a.attributes[0].value;
        //if an old favourite exists and some td is selected
        if ((this.favouriteIndex > -1) && (this.selectedTableCell !== null)) {
            let oldTdIndex = this.favouriteIndex;
            this.removeFromBasket(oldTdIndex);
        }
        if (typeof tdIndex === "string") {
            tdIndex = parseInt(tdIndex, 10);
            this.favouriteIndex = tdIndex;
            sessionStorage.faveIndex = tdIndex;
        }
        this.addToBasket(td);
    }
    //UI logic
    toggleAddToBasketButton() {
        var _a;
        let td = this.selectedTableCell;
        let img = (_a = td) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        let button = document.getElementById("addToBasket");
        button.style.setProperty('pointer-events', 'none');
        //if cell has previously been selected then state will reflect that 
        if (img === undefined) {
            return;
        }
        if (!img.src.includes('tick.svg')) {
            button.style.setProperty('pointer-events', 'auto');
        }
    }
    onTableClick(e) {
        //e is passed in from selected td cell
        let td = e.target;
        //No td selected
        if (this.selectedTableCell === null) {
            this.selectedTableCell = td;
            td.classList.add('selected');
            this.toggleAddToBasketButton();
        }
        //same td selected ergo deselect
        else if (td === this.selectedTableCell) {
            td.classList.remove('selected');
            this.selectedTableCell = null;
            this.toggleAddToBasketButton();
        }
        //New cell selected
        else {
            this.selectedTableCell.classList.remove('selected');
            //update state to new selected cell
            this.selectedTableCell = td;
            td.classList.add('selected');
            this.toggleAddToBasketButton();
        }
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





                                                                    ###########
                                                                    # GENERAL #
                                                                    ###########

https://www.typescriptlang.org/docs/handbook/classes.html

*/
