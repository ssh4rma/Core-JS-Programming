class Queue {
  constructor() {
    this.arr = [];
  }

  push(n) {
    this.arr.push(n);
  }

  helper() {
    let N = this.arr.length; 
    for(let i = 0; i < N/2; ++i) {
      if(this.arr[i] !== this.arr[N-i-1]) {
        console.log("String is not Palindrome");
        break;
      }
    }
    console.log("String is palindrome");
  }

  print() {
    for(let i of this.arr) {
      console.log(i);
    }
  }
}

const q = new Queue();

q.push('a');
q.push('b');
q.push('b');
q.push('a');

q.helper();