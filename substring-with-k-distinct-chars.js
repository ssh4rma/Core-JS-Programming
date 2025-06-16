function helper(s, k) {
  let cnt = 0;
  
  for(let i = 0; i < s.length; ++i) {
    let t = ""; 
    let st = new Set(); 
    for(let j = i; j < s.length; ++j) {
      t += s[j]; 
      st.add(s[j]);

      if(st.size === k) cnt += 1; 
    }
  }

  return cnt;
}

let s = "aba", k = 2;
console.log(helper(s, k));