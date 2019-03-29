onmessage=(x)=>{
    console.log("f2 this:",this);
    let res=0;

    for(; res<10**10; res++);
    
    postMessage("res is: "+res);
}

