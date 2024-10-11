
//arrow
const name= (param1,param2)=>{
    console.log(param1);
    console.log(param2);
    
    
}
name(1,2);

const even = ()=>{
    return "even";
};

const value = even();

console.log(value);



//iffe

(function(param3) {
    console.log(param3);
})(1);  


const odd = (param4)=>{
    return param4;
};

console.log(
    odd(()=>{
        return "name";
    })()
);

console.log(odd("email"));






