// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

function majorityElement(nums: number[]): number {
  let N : number = nums.length;
  let freq : number = Math.floor(N/2);
  let res : number = 0;

  for(let i : number = 0; i < N; ++i) {
      let currFreq = 1;
      for(let j : number = 0; j < N; ++j) {
          if(i === j) continue;
          else if(nums[i] === nums[j]) currFreq += 1; 
      }
      if(currFreq > freq) res = nums[i]; 
  }

  return res;
};