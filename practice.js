//weak map and weak sets, symbols 

const mp = new WeakMap();
let obj = {}; 
mp.set(obj, 1);


console.log(mp.has(obj));
obj = null;

console.log(mp.has(obj));