let arr = [1, 2, 3, 4, 5];
let k = 1;

k = k % arr.length;

// let t = [];
// for(let i = 0; i < k; ++i) {
//   t.push(arr[i]);
// }

// arr.splice(0, k);

// for(let i = 0; i < t.length; ++i) {
//   arr.push(t[i]); 
// }
// console.log(arr);

//optimization
for(let i = 0; i < k; ++i) {
  arr.push(arr[i]);
  arr.shift();
}
console.log(arr);