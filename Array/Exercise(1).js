//Exercise -1-
//Write a function testNum that takes a number as an argument and returns a Promise that tests
//if the value is less than or greater than the value 10.

let num = 5;

function testNum(num) {
    return new Promise((resolve,reject) => { num<10? resolve("Is Bigger Than 10") : reject("Is Smaller Than 10"); });;
}


testNum(num).then((resolve)=> {console.log(resolve)})
    .then((reject) => {
        console.log(reject);
       
    })
    .catch((err) => { console.log("reject got: ", err) });





    //"resolve 1 got",
    //"resolve 2 got: ",