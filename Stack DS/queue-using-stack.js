class Queue {
  constructor() {
    this.arr = [];
  }

  peek() {
    if(this.arr.length === 0) {
      console.log("The Queue is empty");
    } else {
      let N = this.arr.length; 
      console.log("Rear element is ", this.arr[N-1]);
    }
  }

  push(n) {
    this.arr.push(n);
  }

  pop() {
    this.arr.shift();
  }

  sizeOfQueue() {
    console.log("The size of the queue is ", this.arr.length);
  }

  print() {
    for(let i of this.arr) {
      console.log(i);
    }
  }
}

const q = new Queue();

q.push(10);
q.push(20);
q.push(30);
q.push(40);
q.push(50);

q.pop();
q.pop();

q.print();

q.sizeOfQueue();