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