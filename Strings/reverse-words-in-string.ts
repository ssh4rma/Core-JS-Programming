// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

function reverseWords(s: string): string {
  let N: number = s.length;
  let res: string[] = [];

  let i: number = N - 1;

  while (i >= 0 && s[i] === ' ') i--;

  while (i >= 0) {
      let k: number = i;

      while (k >= 0 && s[k] !== ' ') {
          k--;
      }

      res.push(s.slice(k + 1, i + 1));

      while (k >= 0 && s[k] === ' ') k--;

      i = k; 
  }

  return res.join(' ');
}

let s : string = "the sky is blue";
console.log(reverseWords(s));