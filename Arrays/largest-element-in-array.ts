// Given an array arr[]. The task is to find the largest element and return it.

let arr : number[] = [1, 8, 7, 56, 90];

let res : number = -1;

for(let i of arr) {
  res = Math.max(res, i);
}

console.log(res);