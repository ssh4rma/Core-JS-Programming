//Use trim() and toLowerCase() to clean up a user input string. Example: " Hello World" → "hello world". 

let str = " Hello World  ";
str = str.trim(); //removes the whitespace from beginning and end.

// let arr = str.split(" ");
// console.log(arr);

let res = "";
// for(let i = 0; i < arr.length; ++i) {
//   let c = arr[i].toLowerCase();
//   res += c;
//   res += ' ';
// }

// console.log(res);

//Optimization:

for(let i = 0; i < str.length; ++i) {
  let c = str.charCodeAt(i); 
  if (c >= 65 && c <= 90) {
    res += str[i].toLowerCase();
  } else {
    res += str[i];
  }
}
console.log(res);