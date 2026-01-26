"use strict";
// Literal Types
let myName;
let userName = 'Guest';
userName = 'Admin';
/* Functions */
const add = (a, b) => {
    return a + b;
};
// void function
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello!');
logMsg(add(2, 3));
logMsg('Hello!');
// function expression
let subtract = function (c, d) {
    return c - d;
};
// interface MathFunction {
//   (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 3));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default parameters value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(5, 2, 3, 4));
// never type function
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// infinite loop function
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === 'number') {
        return 'Number';
    }
    if (typeof value === 'string') {
        return 'String';
    }
    return createError('This should never happen!');
};
