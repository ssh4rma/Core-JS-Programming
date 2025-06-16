let arr = [3,5,7,100,9,10,2];
let N = arr.length; 

let buyer = -1, seller = -1, profit = -1; 

for(let i = 0; i < N-1; ++i) {
  for(let j = i + 1; j < N; ++j) {
    let diff = arr[j] - arr[i]; 
    if(diff > profit) {
      profit = diff;
      buyer = arr[j];
      seller = arr[i];
    }
  }
}

console.table([`Profit is, ${profit}`, `Sold by, ${seller}`, 
  `Bought by, ${buyer}`]);