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

//fill(): fill the array with the specified value from the specified start to end index, and returns an array

var farr = [1,4,5,5,6];
console.log(farr.fill(1, 0, 3));

//filter(): filter out the element which satsifies the condition in the callback function.`

var filArr = [1, 4, 1, 4, 1, 4];
console.log(filArr.filter((ele, idx) => {
  return ele === 1;
}));

//Find methods:

const fArr = [3,51,5,51,55];

//indexOf(): returns the index of the first element with the specified value.

console.log(fArr.indexOf(51));

//lastIndexOf(): returns the last index of the element which satify the specified value.

console.log(fArr.lastIndexOf(51));

//find(): returns the value of the first element which met the condition

console.log(fArr.find((ele) => {
  return ele === 51;
}));

//findLast(): returns the value of the last element which met the condition.
console.log(fArr.findLast((ele) => {
  return ele === 55;
}));

//findIndex(): return the index of the first occurence of the target value.

var fIArr = [1,3,6,61,61];
console.log(fIArr.findIndex((ele) => {
  return ele === 61; 
}));

//findLastIndex(): returns the index of the last occur
console.log(fIArr.lastIndexOf(61));

//Array creation and modification:

const Marr = [1,4,5,2,7,9,0];

//flatMap(): return a new array. It applies callback function to all the elemenent of the array and return one level flat array.

console.log(Marr.flatMap((ele) => {
  return ele === 2 ? [2,[2]] : ele;
}));

console.log(Marr);//didn't temper the original array

//splice(): This method is used for removing and adds new element into the array.

console.log(Marr.splice(2, 2, 111, 112));
console.log(Marr); //removed 2 elements from array from index position 2 and added 2 elements in place of it.