const arr = [21,11,9,42,31,5];
let N = arr.length;

let low = 0, high = N-1;
merge_sort(low, high, arr);


function merge_sort(low, high, arr) {
  if(low == high) return;
  let mid = Math.floor(low + (high - low) / 2);
  merge_sort(low, mid, arr);
  merge_sort(mid + 1, high, arr);
  merge(low, mid, high, arr);
}

function merge(low, mid, high, arr) {
  let temp = [];
  let left = low, right = mid + 1;
  
  while(left <= mid && right <= high) {
    if(arr[left] > arr[right]) {
      temp.push(arr[right]);
      right++;
    } else if(arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    }
  }
  while(left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while(right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for(let i = 0; i < temp.length; ++i) {
    arr[i + low] = temp[i]; 
  }
}

console.log(arr);