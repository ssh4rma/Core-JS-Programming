//concat(): this array method is used to join 2 or more strings
//and it returns a new array.
var carr1 = [1,3,1,51];
var carr2 = [2,3,5,1,5];
var carr3 = [5,1,56,16,11];

console.log(carr1.concat(carr2.concat(carr3)));

//copyWithin(): 

var copyArr = [1,2,5,5,5,1];
console.log(copyArr.copyWithin(2, 0));
