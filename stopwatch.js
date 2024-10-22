const startStopwatch = () => {
    let starttime = new Date().getTime();
    //console.log(starttime);
    
  
    const updateStopwatch = () => {
      new Promise((res) => {
        setTimeout(() => {
          let time = new Date().getTime();
         // console.log(time);
          
          let timeshow = Math.floor((time - starttime) / 1000); 
          console.log(timeshow);
          res(); 
        }, 1000)
      }).then(() => {
        updateStopwatch();
      })
    }
  
    updateStopwatch(); 
  }
  
  const main = () => {
    startStopwatch();
  }
  
  main();
  