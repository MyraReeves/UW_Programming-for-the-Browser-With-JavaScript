/* • Create a new promise. The function passed to the promise 
should:
 • After 1 second, call Math.random()
 • If the result of Math.random() is > 0.5, call resolve()
 • If the result of Math.random() is <= 0.5, call reject()
 • If the promise is resolved, should console.log('success')
 • If the promise is rejected, should console.log('fail')
 • In either case, should console.log('complete')
*/

// Create the promise:
const randomNumberPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomVal = Math.random()
  
      if (randomVal > 0.5){
        resolve(randomVal)
      }
      else {
        reject(new Error('The value was NOT greater than 0.5!'));
      }
    }, 1000)
  });
  
  
  // Call the promise:
  randomNumberPromise.then((returnedValue) => {
    console.log("SUCCESS! Random value is:", returnedValue)
    return returnedValue
  }).catch((error) => {
    console.log("FAIL!  \nThe following are details about why it failed:\n", error);
  }).finally(() => {
    console.log('Complete')      
  });
  