//Remove all the instances of the value in the array.

let arr = [1,2,3,3,5,1];
let key = 3;

arr.filter((x, idx) => {
  if(x === key) {
    arr.splice(idx, idx);
  }
});

console.log(arr);