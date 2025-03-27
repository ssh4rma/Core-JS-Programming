const arr = [12,14,15,62,66];

let len = arr.length;

//using logic
for(let i = 0; i < len / 2; ++i) {
  let t = arr[i];
  arr[i] = arr[len - i - 1];
  arr[len - i - 1] = t;
}

console.log(arr);

const arr2 = [1,2,3,5,6];
arr2.reverse();
console.log(arr2);