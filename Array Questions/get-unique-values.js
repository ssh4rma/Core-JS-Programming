//Remove all the duplicate values from the array.

let arr = [4, 1, 2, 3, 2, 2, 3, 3];

console.log(arr.filter((x, idx) => {
  return arr.indexOf(x) === idx;
}));