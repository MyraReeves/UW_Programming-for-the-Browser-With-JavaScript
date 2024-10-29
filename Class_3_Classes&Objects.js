// Create a class function named SpaceShip
// - should set two properties: name and topSpeed
// - should have a method named 'accelerate' that logs to the console: 
//   `${name} moving to ${topSpeed}`
class SpaceShip {
    constructor(name='The spaceship', topSpeed='top speed') {
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate() {
        const {name, topSpeed} = this;
        console.log(`${name} moving to ${topSpeed}`)
    }
};

// Call the constructor function to create a couple ships
const spaceShip1 = new SpaceShip('Enterprise', 'Warp 8.0');
const spaceShip2 = new SpaceShip('Voyager', 'Warp 9.9');

// Then call the accelerate method on both of them:
spaceShip1.accelerate();
spaceShip2.accelerate();

// Testing default values "The spaceship" and "top speed":
const spaceShip3 = new SpaceShip();
spaceShip3.accelerate();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Create a function testPhoneNumber that
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid
const testPhoneNumber1 = function(numberString){
    if (numberString[0] == '(' ) {
        return true
    }
    else {
    return false
    }
};

console.log(testPhoneNumber1('(206) 333-4444'));         // Should return true
console.log(testPhoneNumber1('206-333-4444'));           // Should return false
console.log(testPhoneNumber1('206 333 4444'));         // Should return false



const validNumber = /^\(?(\d{3})\)?[-\s]?(\d{3})[-\s]?(\d{4})$/ ;
// Explanation of RegExp:
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

const testPhoneNumber2 = function(numberString){
    if (validNumber.test(numberString) == true){
        return true
      }
      else {
        return false
      }
};

// Checking testPhoneNumber2
console.log(testPhoneNumber2('(206) 333-4444')); // should return true
console.log(testPhoneNumber2('(206) 33-4444')); // should return false, missing a digit

// Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}
const parsePhoneNumber = function(phoneNumber) {
    let parsedAreaCode = /\(?(\d{3})\)?/.exec(phoneNumber);
    let parsedRemainingNumber = /\d{3}[-\s]?(\d{4})/.exec(phoneNumber);
    const phoneObject = {
        areaCode: parsedAreaCode[1],
        phoneNumber: parsedRemainingNumber[0],
    }
    return phoneObject
};


// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));              // should return {areaCode: '206', phoneNumber: '333-4444'}
console.log(parsePhoneNumber('(222) 422-5353'));            // should returns {areaCode: '222', phoneNumber: '422-5353'}


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Create function logReceipt that accepts menu items (1 or as many as you want) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console. Then log a total price.

const logReceipt = function(...objects){
    array = [...objects]
    arrayLength = array.length
    for (let i = 0; i < array.length; i++) {
      let name = array[i].descr;
      let price = array[i].price;
      console.log(name, '- $' + price);
    }
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      let price1 = Number(array[i].price);
      sum += price1
    }
    console.log('Total - $', sum)
  };
  
  // Check
  logReceipt(
    { descr: 'Burrito', price: 5.99 },
    { descr: 'Chips & Salsa', price: 2.99 },
    { descr: 'Sprite', price: 1.99 }
  );
  // should log something like:
  // Burrito - $5.99
  // Chips & Salsa - $2.99
  // Sprite - $1.99
  // Total - $10.97
  
  
  /////////////////////////////////////////////////////////////////////
  //        SOLUTION THOUGHT PROCESSES ARE SPELLED OUT BELOW        //
  ///////////////////////////////////////////////////////////////////
  
  console.log("\n\n\n\n\n➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿\nSolution thought process shown below\n➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿➿")
  
  // IN-CLASS EXERCISE:
  
  // 1. Create a function that accepts as many 
  // objects as desired. These objects each have two properties, 
  // descr and price.
  // 2. Log to the console a list of each item with the price, then 
  // the total
  // Hints: a. Use array forEach method, which accepts a function
  // b. Consider separating into multiple functions
  // const bud = { descr: 'Bud Light', price: 3.99 };
  // const burger = { descr: 'Hamburger', price: 6.99 };
  // Result:
  // Bud Light - $3.99
  // Hamburger - $6.99
  // Total - $10.98
  const bud = { descr: 'Bud Light', price: 3.99 };
  const burger = { descr: 'Hamburger', price: 6.99 };
  
  
  
  // Printing name of item and its price if each object is run separately instead of in an array:
  const logReceipt_inClassExercise = function(item){
    const eachItem = function(item){
      console.log(item.descr, '- $' + item.price)
    }
    eachItem(item)
  };
  
  // Testing:
  logReceipt_inClassExercise(bud);
  logReceipt_inClassExercise(burger);
  
  
  
  
  
  // Finding total price with all objects in one array:
  const logReceiptSum_inClassExercise = function(...arguments){
    console.log("\n\nIf the array is...")
    array = [...arguments]
    console.log(array)
  
    console.log("\nThe length of the array is:")
    arrayLength = array.length
    console.log(arrayLength)
    
    console.log("\nThe first item in the above array:")
    console.log(array[0])
    console.log(array[0].price)
  
    console.log("\nPrices of all items in array:")
    for (let i = 0; i < array.length; i++) {
      const price = array[i].price;
      console.log('Item ' + i, '=', price);
    }
  
    console.log("\nAdding those up equals:")
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      let price1 = Number(array[i].price);
      sum += price1
    }
  
    console.log(sum)
  };
  
  // Testing:
  logReceiptSum_inClassExercise(bud, burger)
  console.log('\n\n\n')
  logReceiptSum_inClassExercise(
    { descr: 'Burrito', price: 5.99 },
    { descr: 'Chips & Salsa', price: 2.99 },
    { descr: 'Sprite', price: 1.99 }
  );
  
  
  
  
  // Printing name of each item and its price when all objects are in one array:
  const inventory = function(...objectsArray){
    array = [...objectsArray]
    console.log("\n\nThe array of objects is...", array)
    arrayLength = array.length
    console.log("The length of the array is:", arrayLength)
    console.log("The descriptive name of the first object is:", array[0].descr, "\nAnd its price is:", array[0].price)
    console.log("\nPrinting out all the object names and their prices:")
    for (let i = 0; i < array.length; i++) {
      let name = array[i].descr;
      let price = array[i].price;
      console.log(name, '- $' + price);
    }
  };
  
  // Testing:
  inventory(
    { descr: 'Bud Light', price: 3.99 },
    { descr: 'Hamburger', price: 6.99 }
  )
  
  inventory(
    { descr: 'Burrito', price: 5.99 },
    { descr: 'Chips & Salsa', price: 2.99 },
    { descr: 'Sprite', price: 1.99 }
  );
  