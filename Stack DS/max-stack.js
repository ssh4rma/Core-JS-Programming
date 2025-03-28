class Stack {
  constructor() {
    this.arr = [];
  }

  // push(n) {
  //   this.arr.unshift(n);
  // }

  mxStack(nums) {
    let mx = [];
    for(let i of nums) {
      if(mx.length === 0) {
        mx.push(i); 
      } else {
        if(mx[0] < i) {
          mx.shift();
          mx.push(i);
        } else {
          this.arr.unshift(i);
        }
      }
    }

    console.log("The maximum element in the stack is ", mx[0]);
  }
}

const st1 = new Stack();

// st1.push(10);
// st1.push(20);
// st1.push(30);
// st1.push(40);
// st1.push(50);
// st1.push(60);

st1.mxStack([10,20,30,40,50,60]);