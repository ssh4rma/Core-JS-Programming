class Queue {
  constructor() {
    this.arr = [];
  }

  push(n) {
    this.arr.push(n);
  }

  interleave() {
    let N = this.arr.length;
    let temp = []; 
    for(let i = N/2; i < N; ++i) {
      temp.push(this.arr[i]);
    }
    
    for(let i = 0; i < temp.length; ++i) {
      this.arr.unshift(temp[i]);
    }

    let i = N/2;
    while(i < N) {
      this.arr.pop();
      i++;
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
q.push(5);
q.push(6);

q.interleave();
q.print();