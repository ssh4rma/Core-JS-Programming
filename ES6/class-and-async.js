class car {
  constructor(name, brand, isElectric) {
    this.name = name;
    this.brand = brand;
    this.isElectric = isElectric;
  }
}

let c1 = new car;
c1.name = "FS50";
c1.brand = "FORD";
c1.isElectric = true;

console.log(c1);

//Promises
const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function() { myResolve("I love You !!"); }, 3000);
});

myPromise.then(function(value) {
  console.log(value);
});