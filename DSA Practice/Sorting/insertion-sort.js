const arr = [21,11,9,42,31,5];

let N = arr.length;

for(let i = 0; i < N; ++i) {
  let key = arr[i];
  let j = i - 1; 

  while(j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j = j - 1;
  }
  arr[j + 1] = key;
}

console.log(arr); 