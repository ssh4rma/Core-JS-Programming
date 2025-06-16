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

function optimalMajorityElement(nums: number[]): number {
  let N : number = nums.length;
  let freq : number = Math.floor(N/2);
  let res : number = 0;

  nums.sort();

  let i : number = 0;
  while(i < N-1) {
      let currFreq : number = 1; 
      let j : number = i+1;
      while(j < N && nums[j] == nums[i]) {
          currFreq += 1;
          j ++;
      }
      if(currFreq > freq) res = nums[i];
      i = j;
  }

  return res;
};

let nums : number[] = [2,2,1,1,1,2,2];
console.log(optimalMajorityElement(nums));

