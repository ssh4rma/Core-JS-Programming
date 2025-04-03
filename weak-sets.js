//same as weak maps but doesn't store values, just keep track of the objects / reference types
//Here also the objects are of weakly referenced.

let st = new WeakSet();

let obj = {};
st.add(obj);

console.log(st.has(obj)); //true
obj = null;
console.log(st.has(obj)); //false

