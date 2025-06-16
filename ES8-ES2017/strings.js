//padStart() and padEnd(): Add padding from the start and from the end respectively.
//Takes 2 arguments("length of the string till which the padding should continue", "padding with character")

let txt = "Sharma";
txt = txt.padStart(13, "Shubham");
console.log(txt); 


let text = "5";
text = text.padEnd(4,0);
console.log(text);