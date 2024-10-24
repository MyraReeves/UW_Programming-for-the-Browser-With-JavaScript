// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - a color
// - a friend (object with the same 3 properties as above)
const myself = {};

myself.firstName = 'Myra';
myself.lastName = 'Reeves';
myself.color = 'purple';
myself.friend = {firstName: 'Shannon', lastName: 'Young', color: 'purple'};

console.log('The myself object consists of the following array: ', myself);


// 2. console.log best friend's firstName and your color
console.log('My favorite person is:', myself.friend.firstName);
console.log('My favorite color is:', myself.color);



// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
ticTacToeBoard = ['-O-', '-XO', 'X-X'];

console.log(
  'The initial/starting game board: \n' +
  ticTacToeBoard[0] + '\n' +
  ticTacToeBoard[1] + '\n' +
  ticTacToeBoard[2]
);


// 4. After the array is created, 'O' claims the top right square.
// Update that value.
ticTacToeBoard[0] = 'OO-';


// 5. Log the grid to the console.
console.log(
  'First move. O claims top right: \n' +
  ticTacToeBoard[0] + '\n' +
  ticTacToeBoard[1] + '\n' +
  ticTacToeBoard[2]
);


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz

// Test email addresses:
const valid_exampleEmail = 'example@example.com';
const valid_firstLastEmail = 'John.Doe@company-website.org';
const invalid_missingAt = 'Mary-Sue2gmail.com';
const invalid_incompleteDomain = 'Henrietta@mail.c';
const valid_withNumberEmail = '1337_H4X0R@computer.com';

/* Explanation of RegExp syntax:
Expected format for myEmail string = name @ domain . extension

The desired RegularExpression is placed between two forward slashes
^ marks the beginning of the desired string
That desired string should be:
(string of any letters, numbers, hyphens, underscores, and/or dots) @ (string of any letters, numbers, hyphens, and/or underscores) . (string of only a few letters)
() surround each substring
[] surround the search validator codes for each substring
[a-z] allows for any lowercase letter in the English alphabet
[A–Z] allows for any uppercase letters in the English alphabet
[0-9] allows for any numerical digits. \d would as well
[-] allows for hyphens
[ _ ] allows for underscores
[.] is a special character allowing for ANYTHING. Therefore an escape character \ is needed in front for it to truly mean that periods are allowed
{} surround exact min,max length requirements
+ allows for any length of characters
$ marks the end of the desired string
*/ 

const valid_email_sequence = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9-_]+)\.([a-zA-Z]{2,10})$/;
// If desired, adding   (\.[a-zA-Z]{2,5})?    to the end would allow for an optional (hence the ? character) country code domain at the very end like .ca for Canada or .mx for Mexico, for example.  However, expanding beyond English language countries brings the extra complication that so far my validation sequence doesn't allow for non-English characters!  Therefore, I'm going to stick with a U.S.-only email format and leave off that extra domain country code.


function testEmail(myEmail) {
  if (valid_email_sequence.test(myEmail) === true){
    return 'has a VALID email format ✅'
  }
  else 
    return 'is NOT a valid email 🚫'
};


// Testing addresses:
console.log(valid_exampleEmail, '\n' + testEmail(valid_exampleEmail));
console.log(valid_firstLastEmail, '\n' + testEmail(valid_firstLastEmail));
console.log(invalid_missingAt, '\n' + testEmail(invalid_missingAt));
console.log(invalid_incompleteDomain, '\n' + testEmail(invalid_incompleteDomain));
console.log(valid_withNumberEmail, '\n' + testEmail(valid_withNumberEmail));



// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
let assignmentDate = '01/21/2019';
let inEpochDateFormat = Date.parse(assignmentDate);
console.log(assignmentDate, 'is', inEpochDateFormat.toString(), 'milliseconds since midnight on January 1, 1970, UTC');

let dueDateInDays = inEpochDateFormat*0.000000011574074;
// 1 millisecond is 0.000000011574074 Days
console.log('or', dueDateInDays.toString(), 'days since midnight on January 1, 1970, UTC')



// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
let dueDateInEpochDays = dueDateInDays+7;
let dueDateInMilliseconds = dueDateInEpochDays*86400000;
// 1 day is 86,400,000 milliseconds

let dueDate = new Date(dueDateInMilliseconds);

console.log('The due date is', dueDateInEpochDays, 'days since midnight on January 1, 1970, UTC \n...which is seven days later \n...or', dueDateInMilliseconds, 'milliseconds in Epoch time since midnight on January 1, 1970, UTC \n...or', dueDate)



// 9. Use dueDate values to create a time tag in format
// <time datetime="MM-DD-YYYY">Month day, year</time>
function calculateDueDate(assignmentDate) {
  assignmentDate = assignmentDate;
  let assignmentOn = new Date(assignmentDate);
  dueDateInDays = (Date.parse(assignmentDate))*0.000000011574074;
  dueDateInMilliseconds = (dueDateInDays+7)*86400000;
  dueDate = new Date(dueDateInMilliseconds);
  return console.log('If the assignment was given on \n' + assignmentOn, '\nthen the due date is \n'+ dueDate);
}

// 10. Log this value using console.log
calculateDueDate('01/21/2019');
calculateDueDate('02/21/2019');
calculateDueDate('03/21/2019');
calculateDueDate('04/21/2019');
calculateDueDate('05/21/2019');
calculateDueDate('06/21/2019');
calculateDueDate('07/21/2019');
calculateDueDate('08/21/2019');
calculateDueDate('09/21/2019');
calculateDueDate('10/21/2019');
calculateDueDate('11/21/2019');
calculateDueDate('12/21/2019');
