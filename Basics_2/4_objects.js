const tinderUser = new Object(); // object constructor syntax
console.log(tinderUser); // {} empty object

const tinderUser1 = {}; // object literal syntax or non-singleton object
console.log(tinderUser1); // {} empty object

// only difference is the first one is singleton object and the second one is non-singleton object 
// singleton object : an object that can only have one instance
// non-singleton object : an object that can have multiple instances
tinderUser.id = "123abc"; // adding property to the object
tinderUser.name = "Soumya"; 
tinderUser.isLoggedIn = false; 
console.log(tinderUser); // { id: '123abc', name: 'Soumya', isLoggedIn: false }

const regulerUser = {
  email: "Soumyadeep@gmail.com",
  fullname: {
    userFullname: {
      firstName: "Soumyadeep",
      lastName: "Chattopadhyay"
    },
  }
}; // object literal syntax
console.log(regulerUser.fullname); // { userFullname: { firstName: 'Soumyadeep', lastName: 'Chattopadhyay' } }
console.log(regulerUser.fullname.userFullname.firstName); // Soumyadeep
// ? optional chaining operator (?.) : used to access nested object properties without worrying about whether the intermediate property is null or undefined . 
// like if we are not sure whether fullname exists in regulerUser object or not then we can use optional chaining operator to avoid runtime error. 
// Example: console.log(regulerUser.fullname?.userFullname?.firstName); // Soumyadeep 
const ob1 = {1: "a", 2: "b"}; // object with numeric keys
const ob2 = {3: "a", 4: "b"}; 
// const ob3 = {ob1,ob2}; // nested object // output: { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'a', '4': 'b' } }
const ob3 = Object.assign({}, ob1,ob2); // merging two objects // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 
// {} is taken as the target object where properties of ob1 and ob2 are copied to 

const ob4 = {...ob1, ...ob2}; // merging two objects using spread operator // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' } 

// from database 
const users = [
  {
    id: 1,
    email: "sc@gmail.com"
  },// an array of objects
  {
    id: 1,
    email: "sc@gmail.com"
  },
  {
    id: 1,
    email: "sc@gmail.com"
  }
]
console.log(users[1].email); // accessing email of second object in the array 
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ] // returns an array of keys of the object
console.log(Object.values(tinderUser)); // [ '123abc', 'Soumya', false ] // returns an array of values of the object

console.log(Object.keys(tinderUser).length); // 3 // returns the number of keys in the object
console.log(Object.values(tinderUser).length); // 3 // returns the number of values in the object
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Soumya' ], [ 'isLoggedIn', false ] ] // returns an array of key-value pairs of the object

console.log(tinderUser.hasOwnProperty("name")); // true // checks if the object has the property or not
console.log(tinderUser.hasOwnProperty("age")); // false // checks if the object has the property or not

