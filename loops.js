for(let a=0;a<11;a++){
    if(a%2===0){
        continue;

    }
    if(a===9){
        break;
    }
    console.log(a);
    
}

let i = 1;

while (i <= 5) {
    console.log("Number: " + i);  
    i++;  
}

const array= ["string",10,true,null,undefined];
array.forEach((value,index,arr)=>{
   // console.log("index->",index,"value->",value,"array->",arr);
    //arr[3]="string";
    return value= value+1;
    
});

const array1=[1,2,3,4,5];

const newArray1=array1.map((value,index,arr)=>{
    return value= value+1;
   

    });
    console.log(array1);
    console.log(newArray1);
    
    





