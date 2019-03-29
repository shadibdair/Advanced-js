
function getRes() {


    console.log("f1 this:",this);
    let work = new Worker("app2.js");


    work.onmessage=(x)=>{
        console.log(x.data);
    };
    
    work.postMessage("");


  
}
