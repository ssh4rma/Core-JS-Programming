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


let k = 1;

for(let i = 1; i < arr.length; ++i) {
  let j = i;
  while(j < arr.length && arr[i] === arr[j]) j++; 

  if(j > i) {
    arr[k++] = arr[i];  
    i = j - 1;  
  }
}
arr.splice(k);
console.log(arr);