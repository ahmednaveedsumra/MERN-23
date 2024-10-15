const arr1= ["string",10,true,null,undefined];
console.log(arr1);

const arr2= [1,2,arr1];
console.log(arr2);

const arr3=[7,8,9];
arr3.push(4);
console.log(arr3);
arr3.pop();
console.log(arr3);
let firstElement = arr3.shift(); 
console.log(arr3); 
console.log(firstElement);
arr3.unshift(1); 
console.log(arr3);

let index = arr3.indexOf(9); 
console.log(index);
console.log(arr3.indexOf(5));








