let str = "baaabbcddffg";
let N = str.length;

let res = '';

let vis = new Array(255);
vis.fill(true);

for (let i = 0; i < N; ++i) {
  let c = str[i];
  let freq = 1;

  if (vis[str.charCodeAt(i)]) {
    for (let j = 0; j < N; ++j) {
      if (j === i) continue;
      else if (str[j] === str[i]) freq += 1;
    }
    vis[str.charCodeAt(i)] = false;
  }

  if (freq === 1) break;
  else res += (c + freq);
}

console.log(res);