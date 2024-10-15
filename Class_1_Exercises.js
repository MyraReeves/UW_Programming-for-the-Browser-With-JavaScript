/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?  
// (radius would be the listed size - i.e. 13" - divided by 2)
function pizzaArea(diameter) {
    const radius = diameter/2;

    // Area = π * radius^2
    const area = Math.PI * Math.pow(radius, 2);         // Math.pow(x, y) returns the value of x raised to the power of y.

    return Math.round(area);        // rounds the number of square inches to the nearest integer
}

// .toString() converts a number into a string
console.log('When rounded to the nearest whole number, the area of a 13" pizza is:');
console.log((pizzaArea(13)).toString() , "square inches");

console.log('When rounded to the nearest whole number, the area of a 17" pizza is:');
console.log((pizzaArea(17)).toString() , "square inches");


// 2. What is the cost per square inch of each pizza?
function costPerSquareInch(diameter, price) {
    const radius = diameter/2;
    const costPerInch = price / (Math.PI * Math.pow(radius, 2));

    return Math.round(costPerInch*100);     // converts the result into cents, and rounds it the nearest whole cent.
}

console.log('The cost per square inch of a $16.99 thirteen inch pizza is approximately:');
console.log((costPerSquareInch(13, 16.99)).toString() , "cents");

console.log('The cost per square inch of a $19.99 seventeen inch pizza is approximately:');
console.log((costPerSquareInch(17, 19.99)).toString() , "cents");


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)


// 4. Draw 3 cards and use Math to determine the highest
// card


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2019, 3, 1);
