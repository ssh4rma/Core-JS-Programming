//q1
const arr = [{1 : '1'}, {2 : '3'}, {3 : '1'}, {5 : '2'}, {2 : '3'}];

const mpp = new Map();

for(let i of arr) {
  let t = Object.values(i);
  let curr = Number(t[0]);
  if(mpp.has(curr)) {
    let f = mpp.get(curr);
    mpp.set(curr, f + 1);
  } else {
    mpp.set(curr, 1);
  }
}

mpp.forEach((val, key) => {
  console.log("number: ", val, "has count: ", key);
})