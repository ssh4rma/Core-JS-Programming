const arr = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

console.log(arr.every((item) => {
  return item.length > 3;
}));