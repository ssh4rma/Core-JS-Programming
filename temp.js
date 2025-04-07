function helper(str) {
  return str.split(' ').map(w => {
          if(w.length > 1) {
              return w[0].toUpperCase() + w.slice(1);
          }
          return w;
      }).join(' ');
}
console.log(helper('hello shubham'));

const arr = [12,15,11,10,9,1,13];
console.log(Array.from("ABCDEFG"));

const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits.indexOf("Apple", 3);
console.log(index);


const fruitss = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruitss.valueOf();
console.log(myArray);