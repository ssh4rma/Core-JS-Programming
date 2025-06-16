//find the first non repeating character in the string.

function firstNonRepChar(str : string) : string {
  let N : number = str.length;
  // let freq : number [] = new Array(255);
  // freq.fill(0);

  for(let i : number = 0; i < N; ++i) {
    let currFreq : number = 1; 
    for(let j : number = 0; j < N; ++j) {
      if(j === i) continue;
      else if(str[i] === str[j]) currFreq += 1;
    }

    if(currFreq === 1) return str[i].toString();
  }
  return "";
}

let str : string = "leetcode";
console.log(firstNonRepChar(str));