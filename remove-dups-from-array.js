let arr = [1, 2, 2, 3, 4, 4, 5];

// let res = []; 
// let i = 0;

// while(i < arr.length) {
//   res.push(arr[i]);
//   let j = i;
//   while(j < arr.length && arr[j] == arr[i]) {
//     j++;
//   }
//   i = j;
// }

// console.log(res);

let i = 1;
while(i < arr.length) {
  let j = i;
  while(j < arr.length && arr[j] == arr[i]) j++;
  [arr[i], arr[j]] = [arr[j], arr[i]]; 
  i = j;
}

console.log(arr);