const mp = new WeakMap();
let obj = {};

mp.set(obj, "hello world");

console.log(mp.has(obj));