const arr1 = [0, 1, 2, [3, 4]];

let res = [];

for(let i = 0; i < arr1.length; ++i) {
  if(arr1[i].length > 1) {
    for(let j of arr1[i]) {
      res.push(j);
    }
  } else {
    res.push(arr1[i]);
  }
} 

console.log(res); 