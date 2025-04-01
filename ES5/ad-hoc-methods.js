//Date.now() : time elapsed since midnight of 1 Jan 1970 in milliseconds
console.log(Date.now()); 

// ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ:
// Z means UTC(Zulu) which is +0:00

//toISOString():
var d = new Date();
console.log(d.toISOString());
