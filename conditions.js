let a=2;
let b=3;

if(a==b!=a<b){
    console.log("yes");
    
}

const c=3;
if(c%2==0){
    console.log(`${c} is even`);
    
}
else{
    console.log(`${c} is odd`);

}

let B = c % 2==0? "even" : "odd";
console.log(B);




const d = 21;
if(typeof d!="number"){
    console.log("number");
    
}else if(d>20){
    console.log("a > 20");
    
}else{
    console.log("a < 20");
    
}

const e =10;

switch(e){
    case 0:
    console.log("e is 0");
    break;
    case 1:
        console.log("e is 0");
        break;
        case 2:
            console.log("e is 0");
            break;
            default:
                console.log("e is not 0,1 & 2");
                break;
                
    
}


