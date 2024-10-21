const promise1 = new Promise((res,rej)=>{
    const a=2;
    if(a%2==0){
        res("even");
    }
    rej("odd");

})

const promise2 = new Promise((res)=>{
    setTimeout(()=>{
        res(new Date());

    },3000)
    

})
console.log(promise2);




const main= async()=>{

    promise1.then((res)=>{
        console.log(res);
        
    
    }).catch((rej)=>{
        console.log(rej);
        
    
    })

    promise2.then((res)=>{
        console.log(res);
        
    
    })
    

   main();


}
main();




