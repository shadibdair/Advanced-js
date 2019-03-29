function Person() {
    let age = 9;

    this.getAge = () => age;
    this.setAge = (val) => {
        if (val < 0 || val > 120)
            throw new Error("age is not valid");
        age = val;
    };
}


let p = new Person();   
console.log(p.age);         //--> undefines
console.log(p.getAge());    //--> 9
p.setAge(50);
console.log(p.getAge());    //--> 50
p.setAge(130);              //-->  Error: age is not valid
console.log(p.getAge());


