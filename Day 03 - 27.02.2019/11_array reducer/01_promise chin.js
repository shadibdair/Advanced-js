let arr = [3000, 1500, 1000];

Promise.all(arr.map(x => new Promise((resolve, reject) => { setTimeout(()=>resolve(Date.now()), x) })))
.then(y=>console.log(y));



let res = arr.reduce(
    (prev, current) => {
        return prev.then(() => {
            console.log(`${Date.now()}`);
            return new Promise((resolve, reject) => { setTimeout(resolve, current) })
        })
    } , new Promise((x,y)=>x())
);

