// Replace Substrings Dynamically 

let str = "The cat sat on the cat mat";
let res = str.replaceAll("cat", "dog");

console.log(res);

//difference between replace() and replaceAll() is when the pattern is a string it will return the first occurence it finds. whereas the replaceAll() will change all the occurance of it.