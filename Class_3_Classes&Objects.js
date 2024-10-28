// Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
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

// Then call accelerate on both of them:
spaceShip1.accelerate();
spaceShip2.accelerate();


// Testing default values "The spaceship" and "top speed":
const spaceShip3 = new SpaceShip();
spaceShip3.accelerate();

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
