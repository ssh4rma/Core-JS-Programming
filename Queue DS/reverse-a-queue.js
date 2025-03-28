class Queue {
  constructor() {
    this.arr = [];
  }

  push(n) {
    this.arr.push(n);
  }


  reverseQ() {
    let N = this.arr.length;
    for(let i = 0; i < N/2; ++i) {
      [this.arr[i],this.arr[N-i-1]] = [this.arr[N-i-1], this.arr[i]];
    }
  }

  print() {
    for(let i of this.arr) {
      console.log(i);
    }
  }
}

const q = new Queue();

q.push(1);
q.push(2);
q.push(3);
q.push(4);


console.log("Before reversing the list is")
q.print();

q.reverseQ();
console.log("After reversing the list is")

q.print(); 
