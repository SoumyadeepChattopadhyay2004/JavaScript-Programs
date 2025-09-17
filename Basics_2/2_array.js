const marvelHeroes = ["thor", "ironman", "spiderman"];
const dcHeroes = ["superman", "batman", "flash"];

marvelHeroes.push(dcHeroes); // adds the entire dcHeroes array as a single element at the end of marvelHeroes 

console.log(marvelHeroes); // ["thor", "ironman", "spiderman", Array(3)]

console.log(marvelHeroes[3][1]); // accesses the second element of the dcHeroes array which is now the fourth element of marvelHeroes  // batman
marvelHeroes.concat(dcHeroes); // merges the two arrays and returns a new array but does not change the original array
console.log(marvelHeroes); // ["thor", "ironman", "spiderman", Array(3)]

const allHeros = marvelHeroes.concat(dcHeroes); // merges the two arrays and returns a new array

console.log(allHeros); // ["thor", "ironman", "spiderman", "superman", "batman", "flash"]

const allnewHeros = [...marvelHeroes, ...dcHeroes]; // merges the two arrays using spread operator and returns a new array

console.log(allnewHeros); // ["thor", "ironman", "spiderman", "superman", "batman", "flash"]


const anotherarr = [[1,2,3],[4,5,6],7,[8,9,[10,11]]]; // nested array
const realarr = anotherarr.flat(Infinity); // flattens the nested array to a single array, Infinity is used to flatten all levels of nesting

// depth can be specified as a number, e.g. 1, 2, 3  which indicates how many levels of nesting should be flattened . 
console.log(realarr); // [1,2,3,4,5,6,7,8,9,10,11]

console.log(Array.isArray("hello")); // returns false as "hello" is not an array
console.log(Array.from("hello")); // converts a string to an array of characters ['h', 'e', 'l', 'l', 'o']
console.log(Array.from({name: "Soumya"})); // converts an object to an array of its values ['Soumya'] // it returns null array as it can not convert the object to an array of values

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // creates an array from the given arguments [100, 200, 300]