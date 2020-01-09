console.log('App Running');

class App {

    selectedTableCell : [Element|null, false] = [null, false];
    basketSize : number = 0;
    
    constructor() {
        

        let elements = document.querySelectorAll<HTMLTableDataCellElement>("td");
        let button = <HTMLDivElement>document.getElementById("addToBasket");
        button.addEventListener("click", () => this.addToBasket());
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", (e: MouseEvent) => this.onTableClick(e));
        }

        
    }


    private isInBasket():void {
        let td = this.selectedTableCell[0];
        let img = td?.lastElementChild as HTMLImageElement;
        let button = <HTMLDivElement>document.getElementById("addToBasket");

        button.style.setProperty('pointer-events','none');
        //if cell has previously been selected then state will reflect that 
        if (!img.src.includes('tick.svg')) {
            button.style.setProperty('pointer-events','auto');
        }


    }
    
    private onTableClick(e: Event):void {
        //e is passed in from selected td cell
        let td = (<Element>e.target);


        //No td selected
        if (this.selectedTableCell[0] === null) {
            this.selectedTableCell[0] = td;
            td.classList.add('selected');
            this.isInBasket()

        } 
        //same td selected ergo deselect
        else if (td === this.selectedTableCell[0]) {
            td.classList.remove('selected');
            this.selectedTableCell[0] = null;
            this.isInBasket()

        } 
        //New cell selected
        else {
            this.selectedTableCell[0].classList.remove('selected');
            //update state to new selected cell
            this.selectedTableCell[0] = td;

            td.classList.add('selected');
            this.isInBasket()

            
        }


    }

    private addToBasket():void {
        let td = this.selectedTableCell[0];
        let img = td?.lastElementChild as HTMLImageElement;
        let basketQty = <HTMLDivElement>document.getElementById('qty-centered');


        if (!img.src.includes('tick.svg')) {
            img.src = "/assets/tick.svg";    
            this.basketSize++
            basketQty.innerText = this.basketSize.toString();
            this.isInBasket()

        } 
        //document.getElementById("addToBasket")?.style.setProperty('pointer-events','none');
              
        
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
