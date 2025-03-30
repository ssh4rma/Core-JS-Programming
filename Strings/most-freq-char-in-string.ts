//string that returns the character that appears the most. If there are ties, return any one of them.

function mostFrequentChar(s: string): string {
  const mp = new Map<string, number>();

  for(let i : number = 0; i < s.length; ++i) {
    mp.set(s[i], (mp.get(s[i]) || 0) + 1);
  }

  let mx : number = 0;
  let res : string = "";

  for(const [key, value] of mp) {
    if(value > mx) {
      mx = value;
      res = key.toString();
    }  
  }

  return res; 
}

let s : string = "aaaaaaabbbbsddcc";
console.log(mostFrequentChar(s));
