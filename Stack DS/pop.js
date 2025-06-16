class Stack {
  constructor (arr) {
    this.arr = [];
  }

  pop() {
    if(this.arr.length == 0) {
      console.log("The stack is empty");
    } else {
      let t = this.arr[0];
      this.arr.shift();
      console.log("the popped element is ", t);
    }
  }

  printTheStack() {
    for(let i of this.arr) {
      console.log(i);
    }
  }

}

const st1 = new Stack();

st1.push(10);
st1.push(20);
st1.push(30);
st1.push(40);


st1.printTheStack(); 