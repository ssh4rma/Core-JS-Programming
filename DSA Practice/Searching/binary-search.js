const arr = [1,2,3,5,7,31];
let key = 31;

binary_search(arr, key, 0, arr.length - 1);

//return the index of the key in the array

function binary_search(arr, key, low, high) {
  // console.log("low is ", low, "high is ", high); 
  if(low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if(arr[mid] == key) {
      console.log(mid);
      return;
    }
    if(key > arr[mid]) return binary_search(arr, key, mid + 1, high);
    else return binary_search(arr, key, low, mid-1);
  }
}