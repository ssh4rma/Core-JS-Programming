//concat(): this array method is used to join 2 or more strings
//and it returns a new array.
var carr1 = [1,3,1,51];
var carr2 = [2,3,5,1,5];
var carr3 = [5,1,56,16,11];

console.log(carr1.concat(carr2.concat(carr3)));

//copyWithin(): override the values of the array at the particular index with the target index vlaue.

var copyArr = [1,2,5,5,5,1];
console.log(copyArr.copyWithin(2, 0));

//entries(): returns the object of array iterator

var enArr = [1,2,4,5,5,11,5,1];
var ob = enArr.entries();
for(let i of ob) {
  console.log(i);
}

//every(): return true or false, if the condition is met by the each and every element in the array. 

var evArr = [3,51,5,51,55];
console.log(evArr.every((ele, idx) => {
  return ele < 10;
}));