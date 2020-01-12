

class App {

    selectedTableCell : Element|null = null;
    basketSize : number = 0;
    favouriteIndex : number = parseInt(sessionStorage.faveIndex, 10) ? parseInt(sessionStorage.faveIndex, 10):-1;
    
    //Logic below initialises State of object
    constructor() {
        let elements = document.querySelectorAll<HTMLTableDataCellElement>("td");
        let button = <HTMLDivElement>document.getElementById("addToBasket");
        let faveButton = <HTMLDivElement>document.getElementById("addToFave");

        //order matters here, because...
        this.enumerateTdEls(elements);
        //...handlers' logic is based on tds being enumerated first
        this.setUpClickHandlers(elements, (e: MouseEvent) => {
            this.onTdClick(e)
        });
        this.styleCurrFavOnLoad(elements);
        button.addEventListener("click", () => this.addToBasket(this.selectedTableCell));

        faveButton.addEventListener("click", () => this.saveFavourite());
   
        


    }

    //constructor helper
    public setUpClickHandlers(el: NodeListOf<HTMLTableDataCellElement>, handler: any):void {
        for (let i = 0; i < el.length; i++) {

            el[i].addEventListener('click', handler);

            el[i].children[0].addEventListener("click",(e: Event) => {
                e.stopPropagation();
            })
        }
    }
    //constructor helper
    private enumerateTdEls(el: NodeListOf<HTMLTableDataCellElement>):void {
            //Enumerate td cells so can refer to them in this objects state.
            //reason to refer to them is so that we can remember favourited td
            for (let i = 0; i < el.length; i++) {
                el[i].title = i.toString();
            }
    }
    //constructor helper
    private styleCurrFavOnLoad(el: NodeListOf<HTMLTableDataCellElement>):void {
        for (let i = 0; i < el.length; i++) {

            if (i === parseInt(sessionStorage.faveIndex, 10)) {

                this.addToBasket(el[i])
                el[i].click()

            }

        }
    }

    private addToBasket(td: Element|null) {
        let img = td?.lastElementChild as HTMLImageElement;
        img.src = "/assets/tick.svg";    
        this.incrementBasketCount()
        this.toggleAddToBasketButton()
        this.toggleFaveButton()   
    }

    private removeFromBasket(tdIndex: number):void {
        let td = document.querySelectorAll<HTMLTableDataCellElement>("td")[tdIndex]
        let img = td?.lastElementChild as HTMLImageElement;
        img.src = "";  
        this.decrementBasketCount();
    }

    //helper
    private incrementBasketCount() {
        let basketQty = <HTMLDivElement>document.getElementById('qty-centered');
        this.basketSize++
        basketQty.innerText = this.basketSize.toString();


    }
    //helper
    private decrementBasketCount() {
        let basketQty = <HTMLDivElement>document.getElementById('qty-centered');
        this.basketSize--
        basketQty.innerText = this.basketSize.toString();


    }


    private saveFavourite():void {
        let td = this.selectedTableCell;
        let tdIndex: string|number|undefined = td?.attributes[0].value;



    
        if (typeof tdIndex === "string") {

            
            tdIndex = parseInt(tdIndex, 10)

            //save old fave
            let oldTdIndex = this.favouriteIndex



            if (this.favouriteIndex === -1) {
                console.log('case 1')
                
                this.addToBasket(td)




            }else if ((this.favouriteIndex > -1) && !(this.favouriteIndex === tdIndex)) {
                
                console.log('case 2')
                console.log(oldTdIndex)
                console.log(td)
                this.removeFromBasket(oldTdIndex)
                this.addToBasket(td)
    
            } else if (this.favouriteIndex === tdIndex) {
                console.log('case 3')
                // this.decrementBasketCount()
                this.removeFromBasket(oldTdIndex)
                
                this.addToBasket(td)

            }
            //save fave to object and browser
            this.favouriteIndex = tdIndex;
            sessionStorage.faveIndex = tdIndex;

        }

    }



    //UI logic
    private toggleAddToBasketButton():void {
        let td = this.selectedTableCell;
        let img = td?.lastElementChild as HTMLImageElement;
        let button = <HTMLDivElement>document.getElementById("addToBasket");

        button.style.setProperty('pointer-events','none');
        //if cell has previously been selected then state will reflect that 

        if (img === undefined) {
            return;
        }
        if (!img.src.includes('tick.svg')) {
            button.style.setProperty('pointer-events','auto');
        }

 
    }
    private toggleFaveButton():void {

        let faveButton = <HTMLDivElement>document.getElementById("addToFave");

        let td = this.selectedTableCell;
        let img = td?.lastElementChild as HTMLImageElement;

 
        

        faveButton.style.setProperty('pointer-events','none');
        //if cell has previously been selected then state will reflect that 

        if (img === undefined) {
            return;
        }
        if (!img.src.includes('tick.svg')) {
            faveButton.style.setProperty('pointer-events','auto');
        } 
        
    }


    
    private onTdClick(e: Event):void {
 
        //e is passed in from selected td cell
        let td = (<Element>e.target);

        //No td selected
        if (this.selectedTableCell === null) {
            this.selectedTableCell = td;
            td.classList.add('selected');
            this.toggleAddToBasketButton()
            this.toggleFaveButton()

        } 
        //same td selected ergo deselect
        else if (td === this.selectedTableCell) {
            td.classList.remove('selected');
            this.selectedTableCell = null;
            this.toggleAddToBasketButton()
            this.toggleFaveButton()

        } 
        //New cell selected
        else {
            this.selectedTableCell.classList.remove('selected');
            //update state to new selected cell
            this.selectedTableCell = td;
            td.classList.add('selected');
            this.toggleAddToBasketButton()
            this.toggleFaveButton()   
        }


    }


};

new App();



