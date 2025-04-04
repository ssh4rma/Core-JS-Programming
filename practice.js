//weak map and weak sets, symbols 

const mp = new WeakMap();
let obj = {}; 
mp.set(obj, 1);


console.log(mp.has(obj));
obj = null;

console.log(mp.has(obj));

//symbols

const sym1 = Symbol();
const sym2 = Symbol(4);

console.log(sym2.description);
console.log(sym1 == sym2);// false