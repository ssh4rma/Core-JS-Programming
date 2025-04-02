//Math.cbrt(): returns the cube root of x
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));

//Math.log2(): returns the base 2 log of x
console.log(Math.log2(2));
console.log(Math.log2(4));

//Math.log10(): returns the base 10 log of x
console.log(Math.log10(100));
console.log(Math.log10(10));

//EPSILON
let x = Number.EPSILON;
console.log(x); 

//Number.MIN_SAFE_INTEGER : It assigns the variable with the smallest possible number.
let y = Number.MIN_SAFE_INTEGER;
console.log(y); 

//Number.MAX_SAFE_NUMBER: It assigns the variable with the largest possible number.
let z = Number.MAX_SAFE_INTEGER;
console.log(z);

//Number.isInteger(): checks whether the number is Integer or not
console.log(Number.isInteger(5.5));
console.log(Number.isInteger(5));

//Number.isSafeInteger(): returns true if the number is is safe integer (means a number can be exactly represented as  double precision number).
console.log(Number.isSafeInteger(12345678901234567890));
console.log(Number.isSafeInteger(1234567890));

//isFinite(): returns false if the number is Infinity or NaN
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));