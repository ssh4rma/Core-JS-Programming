//JSON.parse() : converts text into JS object.
var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);

//JSON.stringify() : converts the object to string.
//It is used when while sending data to the Web servers.

var obj = {name:"John", age:30, city:"New York"};
console.log(JSON.stringify(obj));