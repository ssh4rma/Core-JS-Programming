class Stack {
  constructor (arr) {
    this.arr = [];
  }
  
  push(n) {
    this.arr.unshift(n);
  }

  peek() {
    if(this.arr.length == 0) {
      console.log("The Stack is empty");
    } else {
      console.log("The top element of the stack is", this.arr[0]);
    }
  }

  sizeOfStack() {
    console.log("The size of the stack is ", this.arr.length);
  }
}

const st1 = new Stack();

st1.push(10);
st1.push(20);
st1.push(30);
st1.push(40);

st1.sizeOfStack();

st1.peek();