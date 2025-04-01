// let keyword : block scoped
let x = 10;
{
  let y = 5;
}
console.log(x);

//const keyword: constant declares the constant value, means it points to the memory location of the variable, that's the reason it can't be changed., it's also block scoped.

var z = 10; 
{
  const z = 10;
}
console.log(z);

//Arrow Function: short syntax for writing function: Here we don't need function keyword, return keyword and { } braces.

var res = (x, y) => x * y;
console.log(res(5, 2));

//Object Destructring: allows you to extract properties from objects and assign them to variables using a concise syntax, making it easier to access and work with object data

const arr = [1, 3, 5];
const[a, b, c] = arr;

console.log(a, b, c); 

//Spread Operator: (...) used to expand an iterable into more arguments for function calls

const numbers = [23,55,21,87,56];
let mx = Math.max(...numbers);
console.log(mx);

//For-of Loop: used to iterate over array, string, maps
for(let i of numbers) {
  console.log(i); 
}

//Maps object in JS
const mpp = new Map();
mpp.set(["apples", 5]);
mpp.set(["oranges", 4]);
mpp.set(["Mango", 10]);

for(let i of mpp) {
  console.log(i);
}
