const arr1 = [1,3,6,7,9];
const arr2 = [2,4,5,10];

const res = [];

let i = 0, j = 0;
let N1 = arr1.length, N2 = arr2.length;

while(i < N1 && j < N2) {
  if(arr1[i] < arr2[j]) {
    res.push(arr1[i++]);
  } else if(arr2[j] <= arr1[i]) {
    res.push(arr2[j++]);
  }
}

while(i < N1) {
  res.push(arr1[i++]);
}

while(j < N2) {
  res.push(arr2[j++]);
}

console.log(res);