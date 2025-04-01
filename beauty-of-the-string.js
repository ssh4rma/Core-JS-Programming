// The beauty of a string is the difference in frequencies between the most frequent and least frequent characters.

// For example, the beauty of "abaacc" is 3 - 1 = 2.
// Given a string s, return the sum of beauty of all of its substrings.

var beautySum = function(s) {
  let beauty = 0;
  
  for(let i = 0; i < s.length; ++i) {
    let t = "";
    for(let j = i; j < s.length; ++j) {
      t += s[j];
      // console.log(t);
      let mpp = new Map();
      for(let i of t) {
        if(mpp.has(i)) {
          let cf = mpp.get(i);
          cf += 1;
          mpp.set(i, cf);
        } else {
          mpp.set(i, 1);
        }
      }
      // console.log(mpp);

      let mx = 0, mn = Number.MAX_SAFE_INTEGER;
      mpp.forEach((value, key) => {
        mx = Math.max(mx, value);
        mn = Math.min(mn, value);
      });
      let cB = mx - mn; 
      // console.log(mx, mn); 
      // if(cB === 1) 
      beauty += cB;
    }
  }
  return beauty;
};

let s = "aabcb";
console.log(beautySum(s));