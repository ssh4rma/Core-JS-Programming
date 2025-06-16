const arr = [21,11,9,42,31,5];

let N = arr.length;

for(let i = 0; i < N; ++i) {
  let minIndex = i;

  for(let j = i + 1; j < N; ++j) {
    if(arr[j] < arr[minIndex]) minIndex = j;
  }

  if(minIndex != i) {
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}

console.log(arr); 