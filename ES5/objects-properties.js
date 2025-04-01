//JSON.parse() : converts text into JS object.
var obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);

//JSON.stringify() : converts the object to string.
//It is used when while sending data to the Web servers.

var obj = {name:"John", age:30, city:"New York"};
console.log(JSON.stringify(obj));

//getter and setters

var person = {
  firstName : "Shubham", 
  lastName : "Sharma", 
  get fullName() {
    return this.firstName + " " + this.lastName;
  }, 
  set changeName(fName) {
    this.firstName = fName;
  }
}
console.log(person.fullName);
person.changeName = "aniket";
console.log(person.fullName);