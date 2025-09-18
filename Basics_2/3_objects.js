// singleton object : an object that can only have one instance
// object literal : a comma-separated list of name-value pairs wrapped in curly braces
//Object.create(); // creates an empty object with no prototype // known as constructor method

const MySymbol = Symbol("key1"); // creates a symbol

const user = {
    name: "Soumya",
    "Full_Name": "Soumyadeep Chattopadhyay",
    [MySymbol] : "myvalue", // symbol as a property key
    age: 25,
    location: "India",
    email:"soumya@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
} // object literal
console.log(user.email); // accessing object property using dot notation
console.log(user["email"]); // accessing object property using bracket notation
console.log(user.Full_Name); // accessing object property with space in its name using dot notation will give error
console.log(user["Full_Name"]); // accessing object property with space in its name using bracket notation // this is the only way to access such properties
console.log(user.MySymbol); // accessing symbol property using dot notation will give undefined   
console.log(typeof user.MySymbol); // string // symbol is converted to string when used as a property key
console.log(user["MySymbol"]); // accessing symbol property using bracket notation // this is the only way to access symbol properties

user.email = "soumya@chatgpt.com"; // updating object property
console.log(user["email"]);
/*
Object.freeze(user); // freezes the object, makes it immutable, properties can not be added, deleted or modified
*/
user.email = " soumya@msit.edu.in"; // this will not update the email property as the object is frozen
console.log(user); // No change in email property

user.greeting = function(){ // adding a method to the object
    console.log("Hello User");
}
/*
console.log(user.greeting); // accessing the method // [Function: (anonymous)] because functions are also objects in JS and are stored as references in memory
console.log(user.greeting()); // calling the method // Hello User // undefined (return value of console.log inside the method)
*/
user.greeting1 = function(){ // adding a method to the object
    console.log(`Hello User,${this.name}`); // this refers to the current object 
}
console.log(user.greeting()); // Hello User // undefined (return value of console.log inside the method)
console.log(user.greeting1()); // Hello User,Soumya // undefined (return value of console.log inside the method)

/*
 dot vs bracket notation
 use dot notation when you know the exact name of the property and it is a valid identifier (no spaces, no special characters except _ and $ ( property names are fixed and known beforehand))
 use bracket notation when the property name is dynamic (stored in a variable) or not a valid identifier (has spaces or special characters) and property names are determined at runtime 
 example: dot notation
 let prop = "location";
 console.log(user.prop); // output: undefined because there is no property named "prop" in the user object
 example: bracket notation
 let prop = "location";
 console.log(user[prop]); // output: India because the value of prop is "location" which is a valid property of the user object
 
 */