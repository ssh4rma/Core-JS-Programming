class Stack {
  constructor() {
    this.arr = [];
  }

  reverseString(str) {
    let res = "";
    for(let i of str) {
      this.arr.unshift(i);
    }
    // console.log(this.arr);

    for(let i of this.arr) {
      res += i; 
    }

    console.log(res); 
  }
}

const st1 = new Stack();

st1.reverseString("Shubham");