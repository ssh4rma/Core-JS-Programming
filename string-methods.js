//charAt() - returns the char at specified index of the string.

let str = "HELLO WORLD"; 
console.log(str.charAt(6));

//charCodeAt() - returns the code of the char at particular index

console.log(str.charCodeAt(6));

//at() - returns character at the specified index
//the differnce between at() and charAt() is that at() allows negative index

console.log(str.at(7));

//for extracting the part of the string there are 3 methods
//substring(start, end) and slice(start, end)

console.log(str.substring(4, 7));
console.log(str.slice(5, 7));

//toUpperCase() and toLowerCase() are used to change the characters of the string from lower to upper and upper to lower respectively.

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//concat() method is used to join two strings.

let str2 = "shubham";

let resStr = str.concat("", str2);
console.log(resStr);

//trim() : removes whitespaces from both sides of the string.

let text1 = "      Hello World!      ";
console.log(text1.trim());


//trimStart() : removes the whitespace from the start only. and trimEnd() : removes the whitespaces from end.

console.log(text1.trimStart());
console.log(text1.trimEnd());

//padStart() : padd the string with the char in the args till the specified length is achieved from the start. and padEnd() does the same from the end.

console.log(str2.padStart(10, "x"));
console.log(str2.padEnd(10, "x"));

//repeat(): this method returns the string with the number of copies in the string.

console.log(str2.repeat(5));


//replace() : this method replaces the specified value in the string with the new one given in args.

console.log(str2.replace("shubham", "sharma"));


//split() : this methods converts the string into the array, which help us to apply the array methods like sort, reverse etc. on string as they can't directly apply on strings as they are immutable.

let s1 = "apple banana orange";
s1.split("");

console.log(s1);