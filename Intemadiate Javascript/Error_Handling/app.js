// try {
//     trySomething();
//     } catch (e) {
//     console.log("Oh oh");
//     } finally {
//     console.log("Error or no error, I will be logged!");
//     }


// function trySomething(){
//     throw RangeError();
// }
// trySomething()
// //  try {
// //         trySomething();
// //      } 
// // catch (e)
// //  {
// //         console.log("Oh oh");
// //  } 


// function handle(a)
// {
//     if(isNaN = a)
//     {
//        throw "NOt a Number ";
//     }
//     return a;
    
// }

// try
// {
//  const result = handle(3)
//  console.log("got it")

// }
// catch(e)
// {
//    console.log(e);
// }


function checkNumber(val) {
    try {
      if (isNaN(val)) {
        throw TypeError();
      } else {
        console.log("Got a number ${val} ");
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  
 
  checkNumber(42);     
 
  