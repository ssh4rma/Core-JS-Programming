//The filter() method creates a new array filled with elements that pass a test provided by a function.

const ages = [32, 33, 16, 40];

console.log(ages.filter((age) => {
  return age > 18; 
}))