// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

function subarraySum(nums: number[], k: number): number {
  let allSub: number[][] = [];

  function helper(nums: number[]) {
    let N: number = nums.length;

    for (let i: number = 0; i < N; ++i) {
      let temp: number[] = [];
      for (let j: number = i; j < N; ++j) {
        temp.push(nums[j]);
        allSub.push([...temp]); 
      }
    }
  }

  helper(nums);
  let cnt: number = 0;

  for (let i: number = 0; i < allSub.length; ++i) {
    let currSum: number = 0;
    for (let j: number = 0; j < allSub[i].length; ++j) {
      currSum += allSub[i][j];
    }
    if (currSum === k) cnt += 1;
  }

  return cnt;
}


let nums: number[] = [1, 2, 3];
let k: number = 3;
console.log(subarraySum(nums, k));
