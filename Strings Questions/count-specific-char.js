//count the frequency of specific characters in the given string

let str = "banana";
let N = str.length;

let res = str.split('a'); 

console.log("Frequency is ", N - res.length);