console.log('hello world');

class App {

    tableToggle: boolean = false;
    constructor() {
        let elements = document.querySelectorAll<HTMLElement>("td");
        console.log(elements)
        for (let i = 0; i < elements.length; i++) {
            
            elements[i].addEventListener("click", (e: MouseEvent) => this.onTableClick(e));
        }

        
    }
    private onTableClick(e: Event):void {
        this.tableToggle = !this.tableToggle;
        let td = (<Element>e.target)
        let img =td.lastElementChild as HTMLImageElement

        if (this.tableToggle) {

            td.classList.add('selected');
            img.src = "/assets/tick.svg";

        } else {
            
            td.classList.remove('selected');
            img.src = "";

        }

    }


    private handleChange(event:any):void {
        console.log(event.style.set);
    }

};

new App();

//resources
//https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
//https://www.w3schools.com/jsref/obj_cssstyledeclaration.asp
//https://www.w3schools.com/howto/howto_js_toggle_class.asp
//https://stackoverflow.com/questions/49226309/what-are-the-proper-typescript-types-for-addeventlistener-mousemove-and-its-eve
//https://www.typescriptlang.org/docs/handbook/classes.html
