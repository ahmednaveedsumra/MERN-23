const user = require("./user1");

const person ={
    userId: (()=>{
        return Math.random();

    })(),
    name:"person1",
    Age:20,
    dob: 1990,
    course:{
        name:"Mern",
       "course code":23
    },
    arr:[1,2,3]


    };

    //car.name= "Ahmad";

    let result2= person["name"];

    //let result= car.name;
    console.log(result2);
    console.log(person);

    person.cnic= ()=>{
        console.log("check");
        
    }
    person.cnic();

    const{name,Age}=person;
    const a = name; // destructuing for making it a variable
    console.log(a);
    console.log(Age);

    const arr1=[1,2,3,4,5];
    const[c,d,...e]=arr1;
    console.log(e);
    

    
    const main =([x,...y])=>{
        console.log(x);
        console.log(y);
        
        
    }

    const array= ["string",10,true,null, undefined];
    main(array);
    
    
    
    
    
