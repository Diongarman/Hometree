"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class utils {
    forEachElAddHandler(el, handler) {
        for (let i = 0; i < el.length; i++) {
            el[i].addEventListener('click', handler);
            el[i].children[0].addEventListener("click", (e) => {
                e.stopPropagation();
            });
            // //Stop user from click tick svg img and errors occuring
            // elements[i].children[0].addEventListener("click",(e: Event) => {
            //     e.stopPropagation()
            // })
            // elements[i].addEventListener("click", (e: MouseEvent) => {
            //     this.onTableClick(e)
            // });
            // //Enumerate td cells so can refer to them in this objects state.
            // //reason to refer to them is so that we can remember favourited td
            // elements[i].title = i.toString();
        }
    }
}
exports.utils = utils;
