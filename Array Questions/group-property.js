let arr =  [{name: "A", type: "x"}, {name: "B", type: "y"}, {name: "C", type: "x"}]

console.log(arr.reduce((res, ele) => {
  let key = ele.type;

  if(!res[key]) res[key] = [];
  res[key].push(ele);
  return res;
}, {})); 