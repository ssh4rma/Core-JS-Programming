//map applies the operation to each element in the array and returns the new array

const arr = [1,1,2,3,3,5,1];

let res = arr.map((x) => {
  return x + 1;
});

console.log(res);