// Example: [{name: "John", active: true}, {name: "Jane", active: false}] → [{name: "John", active: true}].

let arr = [{name: "John", active: true}, {name: "Jane", active: false}];

let res = [];

for(let i = 0; i < arr.length; ++i) {
  if(arr[i].active === true) {
    res.push(arr[i].name);    
  }
}
console.log(res);
