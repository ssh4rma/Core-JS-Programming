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

//Object.defineProperty(): It lets you define an object property and/or change a property's value and/or metadata.

console.log(Object.defineProperty(person, "email", {
  value : "shubham.sharma4390@gmail.com",
  writable: true,
  enumerable: true
})); 

console.log(person);

//object.create(): Methods creates an object from an existing object (empty)

let newPerson = Object.create(person);
console.log(newPerson);

newPerson.firstName = "Nice";
newPerson.lastName = "Aqua";
newPerson.email = "nice.aqua@gmail.com"
console.log(newPerson);

//Object.keys() : returns the array with keys of the object 
console.log(Object.keys(person));

//bind() : With the bind() method, an object can borrow a method from another object.

let employee = {
  org : "GE Vernova"
};

let orgName = employee.org.bind(newPerson);
console.log(orgName);