// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

function missingNumber(nums: number[]): number {
  let N : number = nums.length;
  let totalSum : number = (N * (N + 1)) / 2;
  
  let currSum : number = 0;

  for(let i : number = 0; i < N; ++i) {
      currSum += nums[i];
  }

  return totalSum - currSum;
};

let nums : number[] = [9,6,4,2,3,5,7,0,1];

console.log(missingNumber(nums));