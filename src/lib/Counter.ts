import { ElementData } from './ElementData';

export class Counter {
    data: ElementData;
    constructor(data: ElementData) {
        this.data = data;
        this.setInitialValue();
    }
    private setInitialValue() {
        if (this.data.el !== null && this.data.newValue) {
            this.data.el.innerText = String(this.data.initialValue);
        } 
    }
    private setValue(val: string) {
        if (this.data.el !== null) {
            this.data.el.innerText = val;
        }
    }
    public count() {
        let start = Date.now();
        const speed = Number(this.data.countSpeed);

        setInterval(() => {
            let delta = Date.now() - start;
            let value = Math.floor(delta / speed); 
            if (value <= this.data.newValue) {
                this.setValue(String(value));
            }
        }, speed);
    }
}