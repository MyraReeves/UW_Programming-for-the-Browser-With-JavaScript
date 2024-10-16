// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const myself = {};

myself.firstName = 'Myra';
myself.lastName = 'Reeves';
myself.favoriteFoodIsColor = 'purple';     // I wrote a color instead because "favorite food" is a common security question
myself.bestFriend = {firstName: 'Shannon', lastName: 'Young', favoriteFoodIsColor: 'purple'};

console.log('The myself object consists of the following array: ', myself);


// 2. console.log best friend's firstName and your favorite food
console.log('My favorite person is:', myself.bestFriend.firstName);
console.log('My favorite color is:', myself.favoriteFoodIsColor);



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
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


// 10. log this value using console.log
