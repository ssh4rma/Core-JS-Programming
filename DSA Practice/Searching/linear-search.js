const arr = [21,11,9,42,31,5];
let key = 311;

let N = arr.length;
let flag = false;

for(let i = 0; i < N; ++i) {
  if(arr[i] == key) {
    flag = true;
    console.log(i);
    return; 
  } else continue;
}

if(!flag) {
  console.log("the key is not present in the array");
}