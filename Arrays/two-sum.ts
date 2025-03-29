// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function twoSum(nums: number[], target: number): number[] {
  let N : number = nums.length;

  for(let i : number = 0; i < N - 1; ++i) {
      for(let j : number = i + 1; j < N; ++j) {
          if(nums[i] + nums[j] === target) return [i, j];
      }
  }

  return [];
};

let nums : number[] = [2,7,11,15];
let target = 9; 
console.log(twoSum(nums, target));