//Object.entries(): returns the array of entries of the object (key value pair)

const person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

console.log(Object.entries(person));

for(let [key, value] of Object.entries(person)) {
  console.log(key + " is " + value);
}
//Helps in iterating over the object.