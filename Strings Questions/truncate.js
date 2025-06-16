//add (...) character if the string lenght is more than 10.

let str = "hello world this is shubham";

let res = "";
let cLen = 0;

let i = 0;
while(i < str.length && cLen <= 10) {
  res += str[i];
  cLen += 1;
  i++;
}
res += "...";

console.log(res);