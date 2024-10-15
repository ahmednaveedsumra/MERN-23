const user = require("./user");
let a=1;
let b=2;

const updateValue =(newA,newB)=>{
    a = newA;
    b = newB;

};
user(a,b,updateValue);


console.log("main function");
console.log(a,b);




