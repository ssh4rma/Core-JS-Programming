let str = "baaabbccdffg";
let N = str.length;

let res = [];

let vis = new Array(255); 

for(let i = 0; i < vis.length; ++i) {
  vis[i] = true;
}

for(let i = 0; i < N; ++i) {  
  let c = str[i];
  let freq = 1;

  // console.log(vis[str.charCodeAt(i)]);
  
  if(vis[str.charCodeAt(i)] == true) {
    vis[str.charCodeAt(i)] = false;

    for(let j = 0; j < N; ++j) {
      if(i === j) continue;
      if(str[i] === str[j]) freq += 1;
    }
  } else continue;

  if(freq == 1) {
    break;
  } else {
    res += (c + freq);
  }
}

console.log(res);