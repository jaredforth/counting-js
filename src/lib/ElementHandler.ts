import { ElementData } from './ElementData';

export class ElementHandler implements ElementData {
    el: HTMLElement | null;
    countSpeed: number | undefined;
    initialValue: number | boolean;
    newValue: number | boolean;
    constructor(id: string, speed: number) {
        const element: HTMLElement | null = document.getElementById(id);
        if (element) {
            this.el = element;
            this.countSpeed = speed;
            this.newValue = this.getNum();
            this.initialValue = 0;
        } else {
            this.el = null;
            this.countSpeed = undefined;
            this.newValue = this.getNum();
            this.initialValue = false;
        }
    }
    public getData() {
        let data: ElementData = {
            el: this.el,
            countSpeed: this.countSpeed,
            initialValue: this.initialValue,
            newValue: this.newValue
        }
        return data;
    }
    private getNum() {
        if (this.el !== null) {
            if (Number(this.el.innerText) !== NaN) {
                return Number(this.el.innerText);
            } else {
                console.log(`${this.el.innerText} must be a valid number`);
                return false;
            }
        } else {
            console.log("The element must not be null");
            return false;
        }
    }
}