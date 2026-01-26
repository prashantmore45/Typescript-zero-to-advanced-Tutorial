//Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
  name: string,
  active?: boolean,
  albums: stringOrNumberArray
}

type UserId = stringOrNumber;

// Literal Types
let myName: 'Max';

let userName: 'Admin' | 'User' | 'Guest' = 'Guest';
userName = 'Admin';


/* Functions */

const add = (a: number, b: number): number => {
  return a + b;
}

// void function
const logMsg = (message: any): void => {
  console.log(message)
}

logMsg('Hello!')
logMsg(add(2, 3))
logMsg('Hello!')


// function expression
let subtract = function (c: number, d: number): number {
  return c - d;
}

type MathFunction = (a: number, b: number) => number;

// interface MathFunction {
//   (a: number, b: number): number;
// }

let multiply: MathFunction = function (c, d) {
  return c * d;
}

logMsg(multiply(2, 3));


// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== 'undefined') {
    return a + b + c;
  }
  return a + b;
}

// default parameters value
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
  return a + b + c;
}

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
logMsg(sumAll(undefined, 3));


// rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
}

logMsg(total(5, 2, 3, 4));


// never type function
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
}


// infinite loop function
const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
}


// custom type guard
const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false;
}


// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === 'number') {
    return 'Number';
  }
  if (typeof value === 'string') {
    return 'String';
  }
  return createError('This should never happen!');
}