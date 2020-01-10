"use strict";
console.log('App Running');
class App {
    constructor() {
        this.selectedTableCell = null;
        this.basketSize = 0;
        this.favourite = null;
        let elements = document.querySelectorAll("td");
        let button = document.getElementById("addToBasket");
        // let faveButton = <HTMLDivElement>document.getElementById("addToFave");
        // if (this.favourite === null) {
        //     faveButton.addEventListener("click", () => this.addFavourite());
        // }
        button.addEventListener("click", () => this.addToBasket());
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", (e) => this.onTableClick(e));
        }
    }
    isInBasket() {
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
            this.isInBasket();
        }
        //same td selected ergo deselect
        else if (td === this.selectedTableCell) {
            td.classList.remove('selected');
            this.selectedTableCell = null;
            this.isInBasket();
        }
        //New cell selected
        else {
            this.selectedTableCell.classList.remove('selected');
            //update state to new selected cell
            this.selectedTableCell = td;
            td.classList.add('selected');
            this.isInBasket();
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
            this.isInBasket();
        }
    }
    addFavourite() {
    }
    saveFavourite() {
        // var fav = {'element':this.favourite};
        // sessionStorage.setItem('favourite', JSON.stringify(fav));
        // console.log(JSON.parse(sessionStorage.favourite).element);
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
