console.log('hello world');

class App {
    init: void = (function bar(){
        var elements = document.querySelectorAll<HTMLElement>("td");
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", function() {
                console.log("ricked");
        });
}
    }());
};

new App();