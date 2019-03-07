import { ElementHandler } from './lib/ElementHandler';
import { Counter } from './lib/Counter';

class Main {
    id: string;
    speed: number
    constructor(elementId: string, countSpeed: number) {
        this.id = elementId;
        this.speed = countSpeed;

        const handler = new ElementHandler(this.id, this.speed);
        const data = handler.getData();
        const counter = new Counter(data);
        counter.count();
    } 
}

let main = new Main('count', 25);