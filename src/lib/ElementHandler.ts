import { ElementData } from './ElementData';

export class ElementHandler implements ElementData {
    el: HTMLElement | null;
    countSpeed: number | boolean;
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
            this.countSpeed = false;
            this.newValue = false;
            this.initialValue = false;
        }
    }
    private getNum() {
        if (this.el !== null) {
            if (Number(this.el.innerHTML) !== NaN) {
                return Number(this.el.innerHTML);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}