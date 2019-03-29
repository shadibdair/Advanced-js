let arr=["a","b","c"];

let obj={
    "age":12,
    "name":"Bob"
};


console.log("-----------in arr--------------");
for(let i in arr){
    console.log(i);
}

console.log("-----------of arr--------------");
for(let i of arr){
    console.log(i);
}


console.log("-----------in obj--------------");
for(let i in obj){
    console.log(i);
}

console.log("-----------of obj--------------");
for(let i of obj){
    console.log(i);
}

/*
OUTPUT:
____________________
-----------in arr--------------
0
1
2
-----------of arr--------------
a
b
c
-----------in obj--------------
age
name
-----------of obj--------------
for(let i of obj){
             ^
TypeError: obj is not iterable

*/