//indexOf() : returns the index of first occurance of the string in the string or returns -1 otherwise. 

let text = "Please locate where 'locate' occurs!";
console.log(text.indexOf("locate"));

//lastIndexOf() : returns the last index of the occurance of the string in the string and -1 otherwise. 

console.log(text.lastIndexOf("locate"));


//both these methods accepts the second arguments of the starting index from where the searching will begin.

//search(): takes the argument as string and return the index of the first occurance of it in the string. It is different from the indexOf() method because it doesn't take starting index of searching.

console.log(text.search("where"));