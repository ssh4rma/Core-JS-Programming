//Object.fromEntries(): returns an object with the same key value pairs in the argument.
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];
  
const myObj = Object.fromEntries(fruits);
console.log(myObj);