const arr = [1,2,3,5,5,16,15,21];

// for(let i of arr[Symbol.iterator]()) {
//   console.log(i);
// }

//user defined iterator

function printData(arr) {
  let n = 0; 
  
  return {
    next() {
      if(n < arr.length) {
        return {
          value : arr[n++],
          done : false
        }
      } 
      
      return {
        value : undefined,
        done : true
      }
      
    }
  }
}

const arrIterator = printData(arr);

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());