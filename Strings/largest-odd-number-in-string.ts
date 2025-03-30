//You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

function largestOddNumber(num: string): string {
  const N = num.length;

  for (let i = N - 1; i >= 0; --i) {
      if ((num[i] - '0') % 2 === 1) {
          return num.slice(0, i + 1); 
      }
  }

  return "";
}

let num : string = "4206";
console.log(largestOddNumber(num));
