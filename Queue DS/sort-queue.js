class Queue {
  constructor() {
    this.arr = [];
  }

  push(n) {
    this.arr.push(n);
  }

  sortQ() {
    let N = this.arr.length; 
    for(let i = 0; i < N; ++i) {
      for(let j = i + 1; j < N; ++j) {
        if(this.arr[i] > this.arr[j]) {
          [this.arr[i],this.arr[j]] = [this.arr[j], this.arr[i]];
        }
      }
    }
  }

  print() {
    for(let i of this.arr) {
      console.log(i);
    }
  }
}

const q = new Queue();
q.push(11);
q.push(9);
q.push(5);
q.push(1);

q.sortQ(); 
q.print(); 