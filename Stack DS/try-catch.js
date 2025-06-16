//Write a function that prevents more than 5 elements from being pushed to a stack.

class Stack {
  constructor() {
    this.arr = [];
  }

  //push the elements 
  push(n) {
    let N = this.arr.length; 
    try {
      if(N === 5) throw("Out of Bounds"); 
      else {
        this.arr.unshift(n);
      }
    } catch(e) {
      console.log(e);
    }
  }
  
}

let st1 = new Stack(); 

st1.push(1);
st1.push(2);
st1.push(3);
st1.push(4);
st1.push(5);
st1.push(6);