console.log('App Running');

class App {

    selectedTableCell: Element|null = null;
    
    constructor() {
        

        let elements = document.querySelectorAll<HTMLTableDataCellElement>("td");
        let button = <HTMLDivElement>document.getElementById("addToBasket");
        button.addEventListener("click", () => this.addToBasket());
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", (e: MouseEvent) => this.onTableClick(e));
        }

        
    }
    private onTableClick(e: Event):void {

        let td = (<Element>e.target);
        let button = <HTMLDivElement>document.getElementById("addToBasket");


        //No td selected
        if (this.selectedTableCell === null) {
            this.selectedTableCell = td;
            td.classList.add('selected');
            button.style.setProperty('pointer-events','auto');

        } 
        //same td selected ergo deselect
        else if (td === this.selectedTableCell) {
            td.classList.remove('selected');
            this.selectedTableCell = null;
            button.style.setProperty('pointer-events','none');

        } 
        //New cell selected
        else {
            this.selectedTableCell.classList.remove('selected');

            this.selectedTableCell = td;
            td.classList.add('selected');
            button.style.setProperty('pointer-events','auto');

            
        }


    }

    private addToBasket() {
        let td = this.selectedTableCell;
        let img = td?.lastElementChild as HTMLImageElement;
        img.src = "/assets/tick.svg";

        
        
    }


};

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
