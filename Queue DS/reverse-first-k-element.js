class Queue {
  constructor() {
    this.arr = [];
  }

  push(n) {
    this.arr.push(n);
  }

  reverseFirstK(k) {
    let N = this.arr.length;

    let temp = [];
    for(let i = 0; i < k; ++i) {
      temp.unshift(this.arr[i]);
    }

    // console.log(temp);

    let j = 0;
    while(j < k) {
      this.arr.shift();
      j++;
    }
    
    // console.log(this.arr);

    for(let i = 0; i < this.arr.length; ++i) {
      temp.push(this.arr[i]);
    }

    //print the temp queue
    for(let i = 0; i < temp.length; ++i) {
      console.log(temp[i]);
    }
  }

  // print() {
  //   for(let i of this.arr) {
  //     console.log(i);
  //   }
  // }
}

const q = new Queue();

q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(5);
q.push(6);
q.push(7);

q.reverseFirstK(5);

// q.print(); 