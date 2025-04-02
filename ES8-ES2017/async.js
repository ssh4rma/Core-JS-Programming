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