function palindrome(str : string) :boolean{
  let N : number = str.length;

  for(let i : number = 0; i < N / 2; ++i) {
    if(str[i] != str[N-i-1]) return false;
  }
  return true;
}

let str : string = "abba"; 
console.log(palindrome(str));