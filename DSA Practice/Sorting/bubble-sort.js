//this follows the adj. swapping of elements
const arr = [21,11,9,42,31,5];
let N = arr.length;

for(let i = 0; i < N; ++i) {
  let swap = false;
  for(let j = i; j < N; ++j) {
    if(arr[i] > arr[j]) {
      console.log("swapped nums are", arr[i], " ", arr[j]);
      [arr[i],arr[j]] = [arr[j],arr[i]]; //swapping using destructuring
      swap = true;
    } 
  }
  if(!swap) break; //optimizatione  
}

console.log(arr);