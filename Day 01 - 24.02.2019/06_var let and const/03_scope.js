function test(){
  if(true){
    var v1=1;
    let l1=1;
    const c1=1;
    
    
    console.log(v1);  //--> 1
    console.log(l1);  //--> 1
    console.log(c1);  //--> 1
  }

  console.log(v1);  //--> 1
  console.log(l1);  //--> ReferenceError: l1 is not defined
  console.log(c1);  //--> ReferenceError: c1 is not defined
}

test();
console.log(v1);  //--> ReferenceError: v1 is not defined
console.log(l1);  //--> ReferenceError: l1 is not defined
console.log(c1);  //--> ReferenceError: c1 is not defined
