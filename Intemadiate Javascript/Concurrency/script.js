// Concurrency Means Multitasking
// Multitasking
// ik time pr ik se zada kmm krna 

// Javascript ka behavour asyncronus h 
// ik line chli pr dusri line 
// line by line 

// Example 1

// let a = 1;
// let b = 2;
// let sum = a + b;

// console.log(sum)   ye asyncronus javascript h 

// Example 2

// asyncronus nhi hmhe AAasyncronus behavour wali website best parctice h 

// 1.  Callbacks  // means // ik asa func jo parameter k andr call hue or dusre func ko apne andr call karee jisse set time out ke apne itte mins bd run hona h 

// input --> Run --> Call Stack --> WebApi --> Qeue --> Evenet Loop --> Call Stack --> Output


// console.log('f1');
// console.log('f2');

// setTimeout(() => {
//     console.log('f3');
    
// }, 2000);
// console.log('flast');


// AAasyncronus Example

// function asyncronus(){
//     console.log("Hello");

// }
 
// function AAasyncronus (){

//     setTimeout(() => {
//         console.log("Heyy!");
        
//     }, 2000);
// }

// asyncronus()
// AAasyncronus()  is callledd Callbacks Func

// Stack m jo chizyy ati h wo heap meory m store hoti h




