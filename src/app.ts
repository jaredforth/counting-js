import { ElementHandler } from './lib/ElementHandler';
import { Counter } from './lib/Counter';

class Count {
    id: string;
    speed: number;
    el!: HTMLElement;
    constructor(elementId: string, countSpeed: number) {
        this.id = elementId;
        this.speed = countSpeed;

        if (document.getElementById(this.id)) {
            const handler = new ElementHandler(this.id, this.speed);        
            const data = handler.getData();
            const counter = new Counter(data);
            if (handler.el !== null) {
                this.el = handler.el;
            } 
            this.listener(counter);
        } else {
            console.log(`counting-js error: Element with id ${this.id} not found`)
        }
    }
    private listener(counter: Counter) {
        let i = 0;

        const handle = this.onVisabilityChange(this.el, () => {
            if (i === 1) {
                counter.count();
            }
            i++;
        });
        if (window.addEventListener) {
            addEventListener('DOMContentLoaded', handle, false); 
            addEventListener('load', handle, false); 
            addEventListener('scroll', handle, false); 
            addEventListener('resize', handle, false); 
        }
    }
    private onVisabilityChange(el: HTMLElement, callback: Function) {
        let old: boolean;
        return () => {
            let visible: boolean = this.elementInViewport(el);
            if (visible !== old) {
                old = visible; 
                if (typeof callback == 'function') {
                    callback();
                }
            }
        }
    }
    private elementInViewport(el: HTMLElement): boolean {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    } 
}

let count = new Count('count', 50);