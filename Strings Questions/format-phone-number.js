//format a 10 digit phone number string by splitting it into 3 - 4 - 3 format

let str = "1234567890";

let p1 = str.slice(0, 3);
let p2 = str.slice(3, 6);
let p3 = str.slice(6, 10);

let res = "";
res += p1 + '-';
res += p2 + '-';
res += p3;

console.log(res);