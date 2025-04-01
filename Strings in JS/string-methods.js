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
