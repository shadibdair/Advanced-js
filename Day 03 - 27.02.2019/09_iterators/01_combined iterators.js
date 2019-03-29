function* test1() {
    yield "t1.1";
    yield "t1.2";
}

function* test2() {
    yield "t2.1";
    yield "t2.2";
    yield test1();  //--> yields IterableIterator<"t1.1" | "t1.2"> 
}



let res=test2();
console.log(res.next());
console.log(res.next());

for (let z of res.next().value)
    console.log(z);


    /*
    OUTPUT:
    ___________________
    { value: 't2.1', done: false }
    { value: 't2.2', done: false }
    t1.1
    t1.2  
    */