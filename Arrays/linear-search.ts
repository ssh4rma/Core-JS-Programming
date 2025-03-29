//do linear serach in array to find key

function linearSerach (nums : number[], k : number) : boolean{
  let N : number = nums.length;
  for(let i : number = 0; i < N; ++i) {
    if(nums[i] === k) return true;
  }
  return false;
}