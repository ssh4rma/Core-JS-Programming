const arr = [1,3,5,11,16,21];
let k = 4; 

let N = arr.length;
k = k % N;

let i = k;
let temp = [];
while(i < N) {
  temp.push(arr[i]);
  i++;
}

i = k; 
while(i < N) {
  arr.pop();
  i++;
}

temp.reverse();

for(let i = 0; i < temp.length; ++i) {
  arr.unshift(temp[i]);
}

console.log(arr);