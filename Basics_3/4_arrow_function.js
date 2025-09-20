const user = {
    username : "Soumya",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`); 
        //console.log(this); // returns object
    }
}
user.welcomeMessage() // Soumya,welcome to website //

user.username = "Sam"
user.welcomeMessage() // Sam,welcome to website
console.log(this) // {}

function one() {
    console.log(this); // global {global: global, clearImmediate: ƒ, setImmediate: ƒ, clearInterval: ƒ, clearTimeout: ƒ, …}
}
one()

/*
function chai() {
    let username = "Soumya";
    console.log(this.username); // undefined
}
chai()
*/

/*
const chai = function () {
    let username = "Soumya";
    console.log(this.username); // undefined
}
chai()
*/

// arrow function: replaces the function keyword with an arrow (=>) placed between the parameters and the function body
const chai =  () => {
    let username = "Soumya";
    console.log(this); // {}
    console.log(this.username); // undefined
}
chai()

/*
const addTwo = (num1, num2) => {
    return num1+num2;
}
console.log(addTwo(3, 4)) //7
*/

// Implicit return 
/*
const addTwo = (num1, num2) => num1+num2
console.log(addTwo(4,5)); //9
*/

// return object
const addTwo = (num1, num2) => ({username: "Soumya"})
console.log(addTwo()) // {username: 'Soumya'}

