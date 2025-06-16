//balanced parentheses

class Stack {
  constructor() {
    this.arr = [];
  }
  
  chechBalanced(str) {
    for(let i of str) {
      if(i === '(' || i === '[' || i === '{') this.arr.unshift(i);
      else {
        if((i === ')' && this.arr[0] === '(') ||
          (i === ']' && this.arr[0] === '[') ||
          (i === '}' && this.arr[0] === '{')
        ) this.arr.shift();
        else return false;
      }
    }

    return this.arr.length === 0;
  }
}

const st1 = new Stack();

// console.log(st1.chechBalanced("()[]{}"));
console.log(st1.chechBalanced("(]"));