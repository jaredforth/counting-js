# counting-js

_A lightweight library that counts_

counting-js weighs in at 1.8KB, and provides a function with a simple API 

![NPM Downloads](https://img.shields.io/npm/dm/counting-js.svg)

## Installation 

Via NPM: `npm i counting-js`

## Usage 

You can include _counting-js_ to use in your JavaScript file with: 

`import Count from 'counting-js';`

Your JavaScript can be include in HTML: 

`<script type="module" src="./app.js"></script>`

See the `demo` directory for an example.

### Parameters

The `Count` function takes two parameters: `id`, which is the id of the element to count as a string, and `countSpeed`, which is the speed, in milliseconds at which to count. 

If there is element with the id of `foo` that should count at 50ms, a call to `Count` would look like: `Count('foo', 50);`

The value to count to is taken from the inner HTML of the element with the given id, which must be a number, and it will count from 0.

## Contributions 

This code is a work in progress, and contribuions and suggestions for improvements are welcome. 
