let ob1 = {
  name : 'shubham', 
  age : '23',
  location : 'chennai'
};

for(let i in ob1) {
  console.log(ob1[i]);
}

for(let i of Object.values(ob1)) {
  console.log(i);
}