// Given an integer array nums, find the subarray with the largest sum, and return its sum.

function maxSubArray(nums: number[]): number {
  let sum : number = 0;
  let mx : number = Number.MIN_SAFE_INTEGER;

  for(let i of nums) {
      sum += i;
      mx = Math.max(mx, sum);
      sum = Math.max(sum, 0);
  }

  return mx; 
};

let nums : number[] = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums)); 