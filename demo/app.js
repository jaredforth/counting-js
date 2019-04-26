// Import Count function

import Count from '../dist/counting.js';

// Create loop that selects all ids and passes 
// a pseudorandom number to the countSpeed parameter

for (let i = 1; i <= 8; i++) {
    Count(`${i}`, Math.random() * i)
}