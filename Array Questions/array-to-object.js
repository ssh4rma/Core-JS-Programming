//combine two arrays into a key-value object.

let arr = ["name", "age"];
let info = ["John", 25];

// const obj = Object.fromEntries(arr);
// console.log(obj);

console.log(arr.reduce((res, key, idx) => {
  res[key] = info[idx];
  return res;
}, {}));