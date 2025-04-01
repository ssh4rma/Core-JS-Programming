//The Map object holds key-value pairs and remembers the original insertion order of the keys.
const mpp = new Map();

let arr = [1,2,3,5,1,5,1,5,5,1,11,2,5,1];

for(let i of arr) {
  if(mpp.has(i)) {
    let curr = mpp.get(i);
    curr += 1;
    mpp.set(i, curr);
  } else {
    mpp.set(i, 1); 
  }
}

console.log(mpp);

//Set is an object which stores the distinct elements 
//Implemetation of set

const st = new Set();

for(let i of arr) {
  st.add(i); 
}

console.log(st);