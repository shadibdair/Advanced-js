function* test(){
    yield 4;
    yield 5;
    return 6;
    yield 7;  //--> Unreachable code detected.
}

let res=test();  //IterableIterator<6 | 4 | 5 | 7>

console.log("---------next()--------");
for(let step=res.next(); !step.done; step=res.next()){
    console.log(step);
}

console.log("---------for-of--------");
for(let i of test())
    console.log(i);