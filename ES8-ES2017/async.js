//Async function
function helper() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved"); 
    }, 2000);
  });
}

async function asynCall() {
  console.log("calling...");
  const res = await helper(); 
  console.log("Finish Executing");
  console.log("Result is ", res);
}

asynCall();


//Trailing commas: and the (,) values are 2 empty items
const myArr = [1,2,3,4,5,,,];
console.log(myArr);
//output: [ 1, 2, 3, 4, 5, <2 empty items> ]