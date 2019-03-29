console.log(v1);  //--> undefined - becouse hoisting is allwayes undefined in var
var v1=1;

console.log(l1);  //--> ReferenceError: l1 is not defined
let l1=1;

console.log(c1);  //--> ReferenceError: c1 is not defined
const c1=1;
