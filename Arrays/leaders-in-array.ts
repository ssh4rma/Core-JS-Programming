// You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

function leaders(nums : number[]) : number[] {
  let N : number = nums.length;
  let res : number[] = [];

  for(let i : number = 0; i < N; ++i) {
    let flag : boolean = true;
    for(let j : number = i + 1; j < N; ++j) {
      if(nums[j] > nums[i]) flag = false;
    }
    if(flag) res.push(nums[i]);
  }
  return res;
}

let nums : number[] = [16, 17, 4, 3, 5, 2];
console.log(leaders(nums));