// Primitive

// 7 types: String, Number, Bigint, Boolean, Undefined, Symbol, Null
 
const score = 100
const scoreValue = "100"
const isLoggedIn = false
const outsideTemp=null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId) // false

const bigNumber= 1234567890123456789012345678901234567890n


// Reference (Non Primitive): Objects, Arrays, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"]
let myObj={
  name:"Soumyadeep",
  age:24,
  isLoggedIn:false
}

const myFunction = function (){
  console.log("Hello World")
}
console.log(typeof myFunction) // function
console.log(typeof scoreValue)

// JavaScript is a dynamically typed language as variables can hold values of different types during runtime

//https://262.ecma-international.org/5.1/#sec-11.4.3