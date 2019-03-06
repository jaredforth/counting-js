import { ElementHandler } from './lib/ElementHandler';

class Main {
    id: string;
    speed: number
    constructor(elementId: string, countSpeed: number) {
    this.id = elementId;
    this.speed = countSpeed;

    const handler = new ElementHandler;
    const el = handler.getElement(this.id);
    console.log(el);
    } 
}

let main = new Main('count', 5);