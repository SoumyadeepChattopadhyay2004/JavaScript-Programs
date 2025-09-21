const coding = ["js","py","cpp","java","ruby"]

const values = coding.forEach(element => {
  console.log(element);
});

console.log(values);
/*
js
py
cpp
java
ruby
undefined
*/

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num) => num > 4) 
console.log(newNums); // (6) [5, 6, 7, 8, 9, 10]

/*
const newNums = myNums.filter((num) => {
  return num > 4
})  // (6) [5, 6, 7, 8, 9, 10]
*/

const nums = []
nums.forEach((num) => {
  if (num > 4) {
    nums.push(num)
  }
})
console.log(nums); // []

const books = [
  {title: "Book 1", genre: "Fiction", publish: "1981", edition: "2004"},
  {title: "Book 2", genre: "Non-Fiction", publish: "1992", edition: "2008"},
  {title: "Book 3", genre: "History", publish: "1999", edition: "2007"},
  {title: "Book 4", genre: "Science", publish: "1989", edition: "2010"},
  {title: "Book 5", genre: "Fiction", publish: "2009", edition: "2014"},
  {title: "Book 6", genre: "History", publish: "1897", edition: "2010"}
];

/*
const userbooks = books.filter((bk) => bk.genre === "History")
console.log(userbooks);
*/

let userBooks = books.filter((bk) => bk.genre === "History")

userBooks = books.filter((bk) => {
  return bk.publish >= 2000 
})
console.log(userBooks);

