import { ElementHandler } from './lib/ElementHandler';

class Main {
    id: string;
    speed: number
    constructor(elementId: string, countSpeed: number) {
        this.id = elementId;
        this.speed = countSpeed;

        const handler = new ElementHandler(this.id, this.speed);
        console.log(handler.el);
        if (handler.el !== null) {
            handler.el.innerHTML = String(handler.initialValue);
        }
    } 
}

let main = new Main('count', 5);