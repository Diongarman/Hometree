"use strict";
class App {
    //Logic below initialises State of object
    constructor() {
        this.selectedTableCell = null;
        this.basketSize = 0;
        this.favouriteIndex = (sessionStorage.faveIndex, 10) ? (sessionStorage.faveIndex, 10) : -1;
        let elements = document.querySelectorAll("td");
        let button = document.getElementById("addToBasket");
        let faveButton = document.getElementById("addToFave");
        console.log(elements);
        this.setUpClickHandlers(elements, (e) => {
            this.onTableClick(e);
        });
        this.enumerateTdEls(elements);
        button.addEventListener("click", () => this.addToBasket());
        //enable save fave button only if there is no pre-existing fave --> update to be able to toggleFave later though
        //toggle fave button will only work when on the current favourite td or if there is no fave
        if (this.favouriteIndex < 0) {
            faveButton.addEventListener("click", () => this.saveFavourite());
        }
    }
    //constructor helper
    setUpClickHandlers(el, handler) {
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener('click', handler);
            el[i].children[0].addEventListener("click", (e) => {
                e.stopPropagation();
            });
            if (i === parseInt(sessionStorage.faveIndex, 10)) {
                this.switchOnTickStyle(el[i]);
            }
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
    switchOnTickStyle(td) {
        var _a;
        let img = (_a = td) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        //img.onclick = e.stopPropagation()
        if (!img.src.includes('tick.svg')) {
            img.src = "/assets/tick.svg";
            this.incrementBasketCount();
            this.toggleAddToBasketButton();
        }
    }
    incrementBasketCount() {
        let basketQty = document.getElementById('qty-centered');
        this.basketSize++;
        basketQty.innerText = this.basketSize.toString();
    }
    saveFavourite() {
        var _a;
        let td = this.selectedTableCell;
        let tdIndex = (_a = td) === null || _a === void 0 ? void 0 : _a.attributes[0].value;
        if (typeof tdIndex === "string") {
            tdIndex = parseInt(tdIndex, 10);
            this.favouriteIndex = tdIndex;
            sessionStorage.faveIndex = tdIndex;
        }
        this.switchOnTickStyle(td);
    }
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
        console.log(td);
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
    addToBasket() {
        var _a;
        let td = this.selectedTableCell;
        let img = (_a = td) === null || _a === void 0 ? void 0 : _a.lastElementChild;
        let basketQty = document.getElementById('qty-centered');
        if (!img.src.includes('tick.svg')) {
            img.src = "/assets/tick.svg";
            this.basketSize++;
            basketQty.innerText = this.basketSize.toString();
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
