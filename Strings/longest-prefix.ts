function longestCommonPrefix(strs: string[]): string {
  if(strs.length === 0) return "";
  let prefix : string = strs[0];

  for(let i : number = 1; i < strs.length; ++i) {
      while(strs[i].indexOf(prefix) !== 0) {
          prefix = prefix.slice(0, -1);
          if(prefix === "") return "";
      }
  }

  return prefix; 
};

let strs : string [] = ["dog","racecar","car"];
console.log(longestCommonPrefix(strs));