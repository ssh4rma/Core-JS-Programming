class Queue {
  constructor() {
    this.arr = [];
  }

  push(n) {
    this.arr.push(n);
  }


  dqueue() {
    this.arr.shift();
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

q.dqueue();
q.dqueue();

q.print(); 