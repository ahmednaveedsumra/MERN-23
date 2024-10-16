const user = require("./user1");

let header;

const setHeader =(newValue)=>{
    header= newValue;

};
user(setHeader);


console.log("main function");

header=="home" && console.log("Home");
header=="task" && console.log("Task");
header=="profile" && console.log("Profile");






