const coding = ["js","py","cpp","java","ruby"]

coding.forEach(element => {
  console.log(element);
});

// js
// py
// cpp
// java
// ruby

coding.forEach( function (value) {
  console.log(value);
})

/*
function printMe(item) {
  console.log(item); 
}

coding.forEach(printMe())
*/

coding.forEach( (item, index, arr) =>{
  console.log(item, index, arr);
})
/*
js 0 (5) ['js', 'py', 'cpp', 'java', 'ruby']
py 1 (5) ['js', 'py', 'cpp', 'java', 'ruby']
cpp 2 (5) ['js', 'py', 'cpp', 'java', 'ruby']
java 3 (5) ['js', 'py', 'cpp', 'java', 'ruby']
ruby 4 (5) ['js', 'py', 'cpp', 'java', 'ruby']
*/

const myCoding = [
  { languageName: "javascript", languageFileName:"js"},
  {languageName: "java", languageFileName:"java"},
  {languageName: "python", languageFileName:"py"}
]

myCoding.forEach(item => {
  console.log(item.languageName);
});
/*
javascript
java
python
*/