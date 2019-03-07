import { ElementData } from './ElementData';

export class Counter {
    data: ElementData;
    constructor(data: ElementData) {
        this.data = data;
        this.setInitialValue();
    }
    private setInitialValue() {
        if (this.data.el !== null) {
            this.data.el.innerText = String(this.data.initialValue);
        } 
    }
    private setValue(val: string) {
        if (this.data.el !== null) {
            this.data.el.innerText = val;
        }
    }
    public count() {
        let i: number;
        // for (i = Number(this.data.initialValue); i < this.data.newValue; i++) {
        //     setTimeout(() => {
        //         console.log("Waiting");
        //     }, this.data.countSpeed);
        //     console.log(i);
        //     // this.setValue(String(i));
        // }
        let start = Date.now();
        const newValue = Number(this.data.newValue);
        setInterval(() => {
            let delta = Date.now() - start;
            let value = Math.floor(delta / newValue); 
            if (value <= this.data.newValue) {
                this.setValue(String(value));
            }
        }, newValue);
    }
}