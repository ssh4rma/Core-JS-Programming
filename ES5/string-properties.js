//charAt(): returns the character at the specified index
var str = "HELLO WORLD";
console.log(str.charAt(0));

//String over multiple lines using "\" and "+"
"hello \
world" 

"hello" +
"world"

//ES5 allows reserved words as property names in object.

//trim(): methods removes whitespaces from both sides of the string

var str = "       Hello World!        ";
console.log(str.trim());

//.isArray(): checks whether the object is an array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.isArray());

//forEach(): method calls function for every element in the array
var feArr = [1,2,4,5,2,4]; 
feArr.forEach((ele, index) => {
  feArr[index] = ele * 3;
})
console.log(feArr);

//map() array method: this mehtod applies operation to each element in the array, and returns the array.
var numbers1 = [45, 4, 9, 16, 25];
console.log(numbers1.map((ele) => {
  return ele * 2;
}));

//filter(): creates a new array which mets the condition
var filterNums = [45, 4, 9, 16, 25];
console.log(filterNums.filter((ele) => {
  return ele > 18;
}))

//reduce(): takes 2 args (callback fun [takes 3 args {accumulator, currVal, currIdx, array}], initialValue [optional])

var redArr = [45, 4, 9, 16, 25];
console.log(redArr.reduce((tSum, ele) => {
  return tSum += ele;
}))

//The reduceRight() method of Array instances applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
//arguments are same as reduce().

var rrArr = [45, 4, 9, 16, 25];
console.log(rrArr.reduceRight((tSum, ele) => {
  return tSum -= ele;
}));