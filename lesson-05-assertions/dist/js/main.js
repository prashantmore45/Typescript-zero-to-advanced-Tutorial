"use strict";
// convert to more or less specific
let a = 'hello';
let b = a;
let c = a;
let d = 'world';
let e = 'world';
const addOrconcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrconcat(2, 3, 'concat');
// Be carful! TS sees no problem - but a string is returned
let nextVal = addOrconcat(5, 10, 'add');
// 10 as string; // error: Cannot convert type '10' to type 'string'.
10; // double assertion via unknown is possible
// The DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
img.src;
myImg.src;
