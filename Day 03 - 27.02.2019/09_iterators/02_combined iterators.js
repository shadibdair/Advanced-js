function* test1() {
    yield "t1.1";
    yield "t1.2";
}

function* test2() {
    yield "t2.1";
    yield "t2.2";
    yield* test1();  // yields "t1.1" and then yields "t1.2" 
}

for (let z of test2 ())
    console.log(z);


    /*
    OUTPUT:
    ___________________
    t2.1
    t2.2
    t1.1
    t1.2 
    */