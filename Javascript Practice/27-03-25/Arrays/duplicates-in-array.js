const arr = [1,2,3,3,5,5];

//first approach using hashmaps
const mpp = new Map(); 

for(let i of arr) {
  if(mpp.has(i)) {
    mpp.set(i, mpp.get(i) + 1);
  } else {
    mpp.set(i, 1);
  }
}

console.log(mpp);

const res = [];

mpp.forEach((value, key) => {
  if(value > 1) {
    res.push(key);
  }
}) 

console.log(res);