//includes(): returns boolean values if the exists the specified value in the string.

let str = "Hello world, welcome to the universe.";
console.log(str.includes("world"));

//startsWith(): returns boolean value if the string starts with the specified value.

console.log(str.startsWith("Hello"));

//endsWith(): returns boolean value if the string ends with the specified string

console.log(str.endsWith("."));

//entries(): creates a array iterator object with key/value pair. 
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let f = fruits.entries();

console.log(f);

for(let i of f) {
  console.log(i);
}

//from(): returns the array object from any object.
console.log(Array.from("ABCDEFG"));

//keys(): creates a array iteratable containing the keys of array
let fruit = ["Banana", "Orange", "Apple", "Mango"];
let x = fruit.keys();

for(let i of x) {
  console.log(i);
}

//find(): return the first value of the first array element which passes the specified condition.
const numbers = [4, 9, 16, 25, 29];
console.log(numbers.find((ele) => {
  return ele > 18;
})) 

//findIndex(): this method returns the index of the first element which passes the specified condition in callback function.

console.log(numbers.findIndex((ele) => {
  return ele > 18;
}));