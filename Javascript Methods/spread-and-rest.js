const arr = [11,35,63];

console.log(sum(...arr));

function sum(a, b, c) {
  return a + b + c;
}



//spread operator in objects 
const obj1 = {
  apple : 1,
  organges : 5
}

const obj2 = {
  lichi : 2, 
  mangoes : 10
}

const mObj = {
  ...obj1, 
  papaya : 2,
  ...obj2
}

console.log(mObj); 


//rest operator
//rest operator allows function to accept an indefinite number of arguments as an array. 


console.log(helper(1,2,3,4,5,6,7,8,8,9,9,99));

function helper(...args) {
  let tSum = 0;
  for(let arg of args) {
    tSum += arg;
  }
  return tSum; 
}