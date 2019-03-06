import { CountData } from './CountData';

export class ElementHandler {
    el: HTMLElement;
    value: number | boolean;
    constructor(id: string) {
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
            this.el = element;
            this.value = this.getNum();
        } else {
            this.el = new HTMLElement;
            this.value = this.getNum();
        }
        const data: CountData = {
            el: this.el,
            initialValue: this.value,
            countSpeed: 5
        } 
        console.log(data);
    }
    // getElement(id:string) {
    //     if (document.getElementById(id) !== null) {
    //         this.el = document.getElementById(id);
    //     }
    // }
    // private isNull(el) {
    //     if (this.el === null) {
    //         return true
    //     } else {
    //         return false
    //     }
    // }
    private getNum() {
        if (Number(this.el.innerHTML) !== NaN) {
            return Number(this.el.innerHTML);
        } else {
            return false;
        }
    }
}