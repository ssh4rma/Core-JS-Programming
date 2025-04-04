//weak map and weak sets, symbols 

const mp = new WeakMap();
let obj = {}; 
mp.set(obj, 1);


console.log(mp.has(obj));
obj = null;

console.log(mp.has(obj));

//symbols

const sym1 = Symbol();
const sym2 = Symbol(4);

console.log(sym2.description);
console.log(sym1 == sym2);// false

//symbols implementation in object


const sm1 = Symbol("name");
const sm2 = Symbol("age");
const sm3 = Symbol("isActive");

const person = {
  [sm1]: "Alice",          
  [sm2]: 25,              
  [sm3]: true,            
  city: "New York"    
};

console.log(person[sm1]);  
console.log(person[sm2]);  
console.log(person[sm3]);  
console.log(person.city);   

console.log(Object.keys(person)); //only string keys show up

console.log(Object.getOwnPropertySymbols(person));