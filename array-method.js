//concat 2 arrays
const arr1 = [1,2,3,5,6], arr2 = [5,1,5,6,1];

console.log(arr1.concat(arr2));

//copyWithin() : args (targetIndex, indexOfDesiredValue)
console.log(arr1.copyWithin(2, 4));


//splice()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(0, 2, "Mango", "Apple")); 
console.log(fruits);
