// *[Symbol.iterator]() will be called when we run with "let-of" loop
let iterableObj = {
    "name":"Bob",
    "age":12,
    *[Symbol.iterator]() {
        for (let x in this) {
            yield this[x];
        }
    }
};

for (let x of iterableObj) {
    console.log(x);
}


