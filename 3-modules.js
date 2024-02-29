// CommonJS, every file is module (by defalult)
//Modules -Encapsulated code (only share minimum)

const names = require("./4-names")
const functions = require("./5-utils")
console.log(names)
const data = require("./6-alternative-syntax")

require("./7-mindgrenade")

functions.sayHello(names.smush);
functions.sayHello(names.john);
functions.practiceOn(names.smush)
functions.sayHello(names.peter)

console.log(data)

function sayAnotherHello(name){
    console.log(`${name}`)
}

sayAnotherHello('Minar of Pisa')
