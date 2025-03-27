const arr = [11,35,56,21,51];

let mx = -1, mn = 1000;

for(let i of arr) {
  mx = Math.max(mx, i);
  mn = Math.min(mn, i);
}

console.log(mx);
console.log(mn);