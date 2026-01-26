type One = string;
type Two = string | number;
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello';
let b = a as Two;
let c = a as Three;

let d = <One>'world';
let e = <string | number>'world';

const addOrconcat = (a: number, b:number, c: 'add' | 'concat'): number | string => {
    if(c === 'add') return a + b;
    return '' + a + b;
}

let myVal: string = addOrconcat(2,3,'concat') as string;

// Be carful! TS sees no problem - but a string is returned
let nextVal: number = addOrconcat(5,10,'add') as number;

// 10 as string; // error: Cannot convert type '10' to type 'string'.

(10 as unknown) as string; // double assertion via unknown is possible

// The DOM
const img = document.querySelector('img') as HTMLImageElement;
const myImg = document.getElementById('#img') as HTMLImageElement;
const nextImg = <HTMLImageElement> document.getElementById('#img');

img.src
myImg.src