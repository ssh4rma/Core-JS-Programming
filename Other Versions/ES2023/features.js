//findLast(): It returns the last element which satisfies the condition

const temp = [27, 28, 30, 40, 42, 35, 30];
console.log(temp.findLast((x) => {
  return x >= 30;
}));

//findLastIndex() returns the index of the last element which satisfies the condition.

console.log(temp.lastIndexOf((x) => {
  return x >= 30;
}));