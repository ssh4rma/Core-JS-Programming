const arr = [1,2,3,4,5,5,6,7,7];

let i = 0, N = arr.length;

for(; i < N-1; ++i) {
  if(arr[i] == arr[i+1]) {
    console.log(arr[i]); 
    break;
  } else continue;
}

let res = [];

for(; i < N-1; ++i) {
  if(arr[i] == arr[i+1]) {
    let j = i; 
    res.push(arr[i]);
    while(j < N && arr[j] == arr[i]) j++;
    i = j;
  } else continue;
}

console.log(res); 