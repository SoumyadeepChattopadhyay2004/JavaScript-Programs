//array

const arr = [1,2,3,4,5];
console.log(arr[3]); //4

// shallow copy : if we change the copied array, the original array will also be changed

// deep copy : if we change the copied array, the original array will not be changed 

const myHeros = ["thor","spiderman","ironman"];
const myarr = new Array(34,45,67,89);

// array methods 

/*

myarr.push(100); // adds 100 at the end of the array
myarr.push(200); // adds 200 at the end of the array
console.log(myarr);
myarr.pop(); // removes the last element of the array
console.log(myarr);
*/

myarr.unshift(9); // adds 9 at the beginning of the array
myarr.shift(); // removes the first element of the array
console.log(myarr);

console.log(myarr.includes(67)); // returns true if 67 is present in the array, else false
console.log(myarr.indexOf(67)); // returns the index of 67 in the array, else -1

const myArr = myarr.join(); // converts the array to a string
console.log(myArr, typeof myArr); // "34,45,67,89" string


// slice and splice

console.log("A ", myarr);
const newArr = myarr.slice(1, 3); // returns a new array from index 1 to index 3 (3 is not included)

console.log(newArr);
console.log("B ", myarr); // original array is not changed

const newArr2 = myarr.splice(1, 3); // removes 3 elements from index 1 and returns a new array
console.log("C ", myarr); // original array is changed
console.log(newArr2); // returns the removed elements