//Object.fromEntries(): returns an object with the same key value pairs in the argument.
const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];
  
const myObj = Object.fromEntries(fruits);
console.log(myObj);

//flatMap(): maps all elements of an array and then creates a new array by flattening the array.

const myArr = [1, 2, 3, 4, 5, 6];
console.log(myArr.flatMap(x => [x, x * 10]));
