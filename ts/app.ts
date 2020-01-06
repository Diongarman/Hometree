console.log('hello world');

class App {


    constructor() {
        var elements = document.querySelectorAll<HTMLElement>("td");
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", this.onTableClick);
        }
    }

    private onTableClick: { (event: MouseEvent): void } = (event: MouseEvent) => {
        console.log("rick sticked");
        console.log(event);
    }

};

new App();