class Queue {
  constructor() {
    this.arr = [];
  }

  push(n) {
    this.arr.push(n);
  }


  peek() {
    let N = this.arr.length;
    if(N === 0) return -1;
    console.log(this.arr[N-1]);
  }
}

const q = new Queue();

q.push(1);
q.push(2);
q.push(3);
q.push(4);

q.peek(); 
