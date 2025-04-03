const arr = [1,2,3,5,5,16,15,21];

for(let i of arr[Symbol.iterator]()) {
  console.log(i);
}