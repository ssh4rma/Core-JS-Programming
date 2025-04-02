//capitalize the first character of each and every char.

let str = "hello world this is shubham";

let res = "";
let i = 0;

while(i < str.length) {
  if(i === 0) 
    res += str[i].toUpperCase();
  else if(i > 0 && str[i-1] === (' ')) {
    res += str[i].toUpperCase();
  } else {
    res += str[i];
  }
  i++;
}

console.log(res);