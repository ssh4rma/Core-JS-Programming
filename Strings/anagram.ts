//Find whether the two strings are anagram of each other or not.
//String A is anagram of B if, there exist all the elements of string A in String B.

function isAnagram(str1 : string, str2 : string) : boolean {
  str1 = str1.split('').sort().join();
  str2 = str2.split('').sort().join(); 

  return str1 === str2;
}

let str1 : string = "listen";
let str2 : string = "silent";

console.log(isAnagram(str1, str2));