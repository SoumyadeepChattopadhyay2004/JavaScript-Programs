const myObj = {js:"javascript",cpp:"c++",rb:"ruby",swift:"swift by apple"}

for (const key in myObj) {
  console.log(key);
}
// js
// cpp
// rb
// swift

for (const key in myObj) {
  console.log(`${key} shortcut is for ${myObj[key]}`);
}
/*
js shortcut is for javascript
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
  console.log(programming[key]);
}
/*
js
rb
py
java
cpp
*/

//const map = new Map()
//map.set("IN", "India")
//map.set("USA", "United States of America")
//map.set("Fr", "France")
//for (const key in map) {
//  console.log(key);
//}
