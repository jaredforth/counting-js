export default function Count(id, countSpeed) {
    if (document.getElementById(id)) {
        const handler = Handler(id, countSpeed);
        if (handler) {
            listener(handler);
        }
    } else {
        console.log(`counting-js error: Element with id ${id} not found`)
    }
}

function Handler(id, speed) {
    const el = document.getElementById(id);
    if (getNum(el) !== false) {
        return {
            "el": el,
            "countSpeed": speed,
            "newValue": getNum(el),
            "initialValue": 0
        }
    } else {
        console.log("Error with getNum on element " + el);
        return false;
    }
}

function getNum(el) {
    if (el !== null) {
        if (Number(el.innerText) !== NaN) {
            return Number(el.innerText);
        } else {
            console.log(`${el.innerText} must be a valid number`);
            return false;
        }
    } else {
        console.log("The element must not be null");
        return false;
    }
}

function Counter(data) {
    let newData = setInitialValue(data);
    let start = Date.now();
    const speed = Number(newData.countSpeed);
    setInterval(() => {
        let delta = Date.now() - start;
        let value = Math.round(delta / speed); 
        if (value > newData.newValue) {
            value = newData.newValue;
        }
        setValue(data, value);
    }, speed);
}

function setInitialValue(data) {
    if (data) {
        data.el.innerText = String(data.initialValue);
    }
    return data;
}

function setValue(data, val) {
    if (data) {
        data.el.innerText = val;
    }
}

function listener(counter) {
    let i = 0;

    const handle = onVisabilityChange(counter.el, () => {
        if (i === 0 && elementInViewport(counter.el)) {
            Counter(counter);
            i = 2;
        }
        if (i === 1) {
            Counter(counter);
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

function onVisabilityChange(el, callback) {
    let old;
    return function() {
        let visible = elementInViewport(el);
        if (visible !== old) {
            old = visible; 
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}

function elementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
} 