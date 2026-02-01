"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Dave'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Dave' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    //process the user with the id property
    return user;
};
console.log(processUser({ id: 1, name: 'John' }));
// console.log(processUser({name: 'Dave'}))
const getUserProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    { "id": 1, "name": "John", "username": 'john01', "email": 'john01@example.com', "address": { "city": "New York", "zip": "10001" } },
    { "id": 2, "name": "Dave" },
    { "id": 3, "name": "Jane" },
];
console.log(getUserProperty(usersArray, 'id'));
console.log(getUserProperty(usersArray, 'name'));
console.log(getUserProperty(usersArray, 'username'));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('John');
console.log(store.state);
store.state = 'Dave';
console.log(store.state);
//store.state = 1234
const myState = new StateObject([15]);
console.log(myState.state);
myState.state = ['Dave', 21, true];
console.log(myState.state);
