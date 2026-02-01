const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && Array!.isArray(arg) && arg !== null)
}

console.log(isObj(true))
console.log(isObj('John'))
console.log(isObj([1, 2, 3]))
console.log(isObj({ name: 'John'}))
console.log(isObj(null))

const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false}
    }
    return { arg, is: !!arg }
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Dave'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({name: 'Dave'}))
console.log(isTrue([]))
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return {value: arg, is: false}
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false}
    }
    return { value: arg, is: !!arg }
}


interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T => {
    //process the user with the id property
    return user
}

console.log(processUser({id: 1, name: 'John'}))
// console.log(processUser({name: 'Dave'}))


const getUserProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {"id": 1, "name": "John", "username": 'john01', "email": 'john01@example.com', "address": {"city": "New York", "zip": "10001"}},
    {"id": 2, "name": "Dave"},
    {"id": 3, "name": "Jane"},
]

console.log(getUserProperty(usersArray, 'id'))
console.log(getUserProperty(usersArray, 'name'))
console.log(getUserProperty(usersArray, 'username'))


class StateObject<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObject('John')
console.log(store.state)
store.state = 'Dave'
console.log(store.state)
//store.state = 1234

const myState = new StateObject<(string | number | boolean)[]>([15])
console.log(myState.state)
myState.state = ['Dave', 21, true]
console.log(myState.state)