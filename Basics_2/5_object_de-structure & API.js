const course = {
    title: "JavaScript Basics",
    duration: "3 months",
    topics: ["Variables", "Data Types", "Functions", "Objects"],
    price:"999",
    instructor: "John Doe",
}

// console.log(course.instructor); // output: John Doe

const {instructor} = course; // object de-structuring 
// extracting properties from an object and storing them in variables with the same name as the property name
// {} is the object from which we want to extract properties
console.log(instructor); // output: John Doe
const {instructor:tutor} = course; // object de-structuring with variable renaming
console.log(tutor); // output: John Doe

/*
const navbar = (company) => {

}
navbar(company = "amazon")
*/ 

// API : Application Programming Interface : a set of rules and protocols for building and interacting with software applications

// JSON : JavaScript Object Notation : a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate
// JSON is a subset of JavaScript object syntax but it is not a JavaScript object 
// JSON keys must be strings wrapped in double quotes
// JSON values can be strings, numbers, booleans, null, arrays or objects

/*
{
  "name": "Soumyadeep", 
  "course": "JavaScript",
  "price": "Free "
} // valid JSON object 
*/

[
  {},
  {},
  {}
] // API response is usually an array of objects
