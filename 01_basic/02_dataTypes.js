"use strict"; // treate all JS code as newer version

// alert("hello world"); // we are using nodejs, not browser

let name = "Anup"
let age = 21
let isLoggedInVal = false

console.table([typeof name, typeof age, typeof isLoggedInVal]);

// **************** Summary ******************

// Primitive 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 30820802803027834983n

console.log("this is a " + bigNumber);

// Refference (Non premitive) : Array, Objects, Functions 

const heros = ["shaktiman", "nagraj", "doga"]

let myObj = {
    name: "Anup",
    age: 27
}

const myFunction = function(){
    console.log("hello world!!!");
}

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction);