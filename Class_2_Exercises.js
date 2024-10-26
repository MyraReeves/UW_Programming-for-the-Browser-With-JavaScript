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



// 9. Use dueDate values to create a time in format
// "MM-DD-YYYY" Month-day-year
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

// 11. Use the DOM to generate HTML displaying various assignment dates and due dates

// For use in writing to the DOM, I'm rewriting the above function so that it returns only the due date instead of console logging

// For PST (November - March):
const PSTfunction = function(assignmentDate) {
  assignmentDate = assignmentDate;
  let assignmentOn = new Date(assignmentDate);
  dueDateInDays = (Date.parse(assignmentDate))*0.000000011574074;
  dueDateInMilliseconds = (dueDateInDays+7)*86400000;
  dueDate = new Date(dueDateInMilliseconds+10000);
  return dueDate
}

// For PDT (March - October):
const DSTfunction = function(assignmentDate) {
  assignmentDate = assignmentDate;
  let assignmentOn = new Date(assignmentDate);
  dueDateInDays = (Date.parse(assignmentDate))*0.000000011574074;
  dueDateInMilliseconds = (dueDateInDays+7)*86400000;
  dueDate = new Date(dueDateInMilliseconds+11111);
  return dueDate
}


// Writing to the DOM to generate HTML codes
const dueDateContainer = document.getElementById('dueDates');

// Writes January heading into HTML file via the DOM:
const january = document.createElement('h3');
january.className = 'brown';                                                  //Sets class of h3 for internal CSS color styling in HTML file
dueDateContainer.appendChild(january);
january.textContent = 'January';

// Adds January assignment date to HTML file via the DOM: 
const januaryAssignmentParagraph1 = document.createElement('p');
januaryAssignmentParagraph1.className = 'brown';
dueDateContainer.appendChild(januaryAssignmentParagraph1);
januaryAssignmentParagraph1.textContent = 'Assignment Date: ';

const januaryAssignmentDate1 = document.createElement('time');               //Note: ' time datetime="2019-01-21" ' does NOT work! Causes "invalid tag" error
januaryAssignmentParagraph1.appendChild(januaryAssignmentDate1);
januaryAssignmentDate1.textContent = '2019-01-21'

// Converts YYYY-MM-DD to 'Month day, year'
const januaryYearMonthDay = '2019-January-21';
let firstDash = januaryYearMonthDay.indexOf('-');
let monthDay = januaryYearMonthDay.substring(firstDash + 1);
let secondDash = monthDay.indexOf('-');
let month = monthDay.substring(0, secondDash);
let day = monthDay.substring(secondDash + 1);
let year = januaryYearMonthDay.substring(0, firstDash);
const januaryMonthDayYear = month + ' ' + day + ',' + ' ' + year;

// Adds January assignment date in 'Month day, year' format to HTML file via the DOM:
const januaryAssignmentParagraph2 = document.createElement('p');
januaryAssignmentParagraph2.className = 'brown';
dueDateContainer.appendChild(januaryAssignmentParagraph2);
januaryAssignmentParagraph2.textContent = januaryMonthDayYear;

// Adds January due date to HTML file via the DOM:
const januaryDueParagraph = document.createElement('p');
dueDateContainer.appendChild(januaryDueParagraph);
januaryDueParagraph.textContent = 'Due Date: ';

const januaryDueDate = document.createElement('time');               // Using only 'time' tag since 'time datetime' throws error
januaryDueParagraph.appendChild(januaryDueDate);
generatedJanuaryDate = PSTfunction('01/21/2019');
januaryDueDate.textContent = generatedJanuaryDate;





// Code below repeats the above DOM-manipulation process for the remaining 11 months, using different days for each month:
const february = document.createElement('h3');
february.className = 'blue';
dueDateContainer.appendChild(february);
february.textContent = 'February';

const februaryAssignmentParagraph1 = document.createElement('p');
februaryAssignmentParagraph1.className = 'blue';
dueDateContainer.appendChild(februaryAssignmentParagraph1);
februaryAssignmentParagraph1.textContent = 'Assignment Date: ';

const februaryAssignmentDate1 = document.createElement('time');
februaryAssignmentParagraph1.appendChild(februaryAssignmentDate1);
februaryAssignmentDate1.textContent = '2019-02-10'

const februaryYearMonthDay = '2019-February-10';
firstDash = februaryYearMonthDay.indexOf('-');
monthDay = februaryYearMonthDay.substring(firstDash + 1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = februaryYearMonthDay.substring(0, firstDash);
const februaryMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const februaryAssignmentParagraph2 = document.createElement('p');
februaryAssignmentParagraph2.className = 'blue';
dueDateContainer.appendChild(februaryAssignmentParagraph2);
februaryAssignmentParagraph2.textContent = februaryMonthDayYear;

const februaryDueParagraph = document.createElement('p');
dueDateContainer.appendChild(februaryDueParagraph);
februaryDueParagraph.textContent = 'Due Date: ';

const februaryDueDate = document.createElement('time');
februaryDueParagraph.appendChild(februaryDueDate);
generatedFebruaryDate = PSTfunction('02/10/2019');
februaryDueDate.textContent = generatedFebruaryDate;



const march = document.createElement('h3');
march.className = 'pink';
dueDateContainer.appendChild(march);
march.textContent = 'March';

const marchAssignmentParagraph1 = document.createElement('p');
marchAssignmentParagraph1.className = 'pink';
dueDateContainer.appendChild(marchAssignmentParagraph1);
marchAssignmentParagraph1.textContent = 'Assignment Date: ';

const marchAssignmentDate1 = document.createElement('time');
marchAssignmentParagraph1.appendChild(marchAssignmentDate1);
marchAssignmentDate1.textContent = '2019-03-14'

const marchYearMonthDay = '2019-March-14';
firstDash = marchYearMonthDay.indexOf('-');
monthDay = marchYearMonthDay.substring(firstDash + 1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = marchYearMonthDay.substring(0, firstDash);
const marchMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const marchAssignmentParagraph2 = document.createElement('p');
marchAssignmentParagraph2.className = 'pink';
dueDateContainer.appendChild(marchAssignmentParagraph2);
marchAssignmentParagraph2.textContent = marchMonthDayYear;

const marchDueParagraph = document.createElement('p');
dueDateContainer.appendChild(marchDueParagraph);
marchDueParagraph.textContent = 'Due Date: ';

const marchDueDate = document.createElement('time');
marchDueParagraph.appendChild(marchDueDate);
generatedMarchDate = DSTfunction('03/14/2019');
marchDueDate.textContent = generatedMarchDate;



const april = document.createElement('h3');
april.className = 'orange';
dueDateContainer.appendChild(april);
april.textContent = 'April';

const aprilAssignmentParagraph1 = document.createElement('p');
aprilAssignmentParagraph1.className = 'orange';
dueDateContainer.appendChild(aprilAssignmentParagraph1);
aprilAssignmentParagraph1.textContent = 'Assignment Date: ';

const aprilAssignmentDate1 = document.createElement('time');
aprilAssignmentParagraph1.appendChild(aprilAssignmentDate1);
aprilAssignmentDate1.textContent = '2020-04-20'                              // I decided to change the year, for the sake of variety  

const aprilYearMonthDay = '2020-April-20';
firstDash = aprilYearMonthDay.indexOf('-');
monthDay = aprilYearMonthDay.substring(firstDash+1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = aprilYearMonthDay.substring(0, firstDash);
const aprilMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const aprilAssignmentParagraph2 = document.createElement('p');
aprilAssignmentParagraph2.className = 'orange';
dueDateContainer.appendChild(aprilAssignmentParagraph2);
aprilAssignmentParagraph2.textContent = aprilMonthDayYear;

const aprilDueParagraph = document.createElement('p');
dueDateContainer.appendChild(aprilDueParagraph);
aprilDueParagraph.textContent = 'Due Date: ';

const aprilDueDate = document.createElement('time');
aprilDueParagraph.appendChild(aprilDueDate);
generatedAprilDate = DSTfunction('04/20/2020');
aprilDueDate.textContent = generatedAprilDate;



const may = document.createElement('h3');
may.className = 'green';
dueDateContainer.appendChild(may);
may.textContent = 'May';

const mayAssignmentParagraph1 = document.createElement('p');
mayAssignmentParagraph1.className = 'green';
dueDateContainer.appendChild(mayAssignmentParagraph1);
mayAssignmentParagraph1.textContent = 'Assignment Date: ';

const mayAssignmentDate1 = document.createElement('time');
mayAssignmentParagraph1.appendChild(mayAssignmentDate1);
mayAssignmentDate1.textContent = '2020-05-04'

const mayYearMonthDay = '2020-May-04';
firstDash = mayYearMonthDay.indexOf('-');
monthDay = mayYearMonthDay.substring(firstDash+1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = mayYearMonthDay.substring(0, firstDash);
const mayMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const mayAssignmentParagraph2 = document.createElement('p');
mayAssignmentParagraph2.className = 'green';
dueDateContainer.appendChild(mayAssignmentParagraph2);
mayAssignmentParagraph2.textContent = mayMonthDayYear;

const mayDueParagraph = document.createElement('p');
dueDateContainer.appendChild(mayDueParagraph);
mayDueParagraph.textContent = 'Due Date: ';

const mayDueDate = document.createElement('time');
mayDueParagraph.appendChild(mayDueDate);
generatedMayDate = DSTfunction('05/04/2020');
mayDueDate.textContent = generatedMayDate;



const june = document.createElement('h3');
june.className = 'purple';
dueDateContainer.appendChild(june);
june.textContent = 'June';

const juneAssignmentParagraph1 = document.createElement('p');
juneAssignmentParagraph1.className = 'purple';
dueDateContainer.appendChild(juneAssignmentParagraph1);
juneAssignmentParagraph1.textContent = 'Assignment Date: ';

const juneAssignmentDate1 = document.createElement('time');
juneAssignmentParagraph1.appendChild(juneAssignmentDate1);
juneAssignmentDate1.textContent = '2020-06-12'

const juneYearMonthDay = '2020-June-12';
firstDash = juneYearMonthDay.indexOf('-');
monthDay = juneYearMonthDay.substring(firstDash + 1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = juneYearMonthDay.substring(0, firstDash);
const juneMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const juneAssignmentParagraph2 = document.createElement('p');
juneAssignmentParagraph2.className = 'purple';
dueDateContainer.appendChild(juneAssignmentParagraph2);
juneAssignmentParagraph2.textContent = juneMonthDayYear;

const juneDueParagraph = document.createElement('p');
dueDateContainer.appendChild(juneDueParagraph);
juneDueParagraph.textContent = 'Due Date: ';

const juneDueDate = document.createElement('time');
juneDueParagraph.appendChild(juneDueDate);
generatedJuneDate = DSTfunction('06/12/2020');
juneDueDate.textContent = generatedJuneDate;



const july = document.createElement('h3');
july.className = 'maroon';
dueDateContainer.appendChild(july);
july.textContent = 'July';

const julyAssignmentParagraph1 = document.createElement('p');
julyAssignmentParagraph1.className = 'maroon';
dueDateContainer.appendChild(julyAssignmentParagraph1);
julyAssignmentParagraph1.textContent = 'Assignment Date: ';

const julyAssignmentDate1 = document.createElement('time');
julyAssignmentParagraph1.appendChild(julyAssignmentDate1);
julyAssignmentDate1.textContent = '2021-07-01'                               // Year changes again :)

const julyYearMonthDay = '2021-July-01';
firstDash = julyYearMonthDay.indexOf('-');
monthDay = julyYearMonthDay.substring(firstDash + 1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = julyYearMonthDay.substring(0, firstDash);
const julyMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const julyAssignmentParagraph2 = document.createElement('p');
julyAssignmentParagraph2.className = 'maroon';
dueDateContainer.appendChild(julyAssignmentParagraph2);
julyAssignmentParagraph2.textContent = julyMonthDayYear;

const julyDueParagraph = document.createElement('p');
dueDateContainer.appendChild(julyDueParagraph);
julyDueParagraph.textContent = 'Due Date: ';

const julyDueDate = document.createElement('time');
julyDueParagraph.appendChild(julyDueDate);
generatedJulyDate = DSTfunction('07/01/2021');
julyDueDate.textContent = generatedJulyDate;



const august = document.createElement('h3');
august.className = 'pink';
dueDateContainer.appendChild(august);
august.textContent = 'August';

const augustAssignmentParagraph1 = document.createElement('p');
augustAssignmentParagraph1.className = 'pink';
dueDateContainer.appendChild(augustAssignmentParagraph1);
augustAssignmentParagraph1.textContent = 'Assignment Date: ';

const augustAssignmentDate1 = document.createElement('time');
augustAssignmentParagraph1.appendChild(augustAssignmentDate1);
augustAssignmentDate1.textContent = '2021-08-03'

const augustYearMonthDay = '2021-August-03';
firstDash = augustYearMonthDay.indexOf('-');
monthDay = augustYearMonthDay.substring(firstDash + 1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = augustYearMonthDay.substring(0, firstDash);
const augustMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const augustAssignmentParagraph2 = document.createElement('p');
augustAssignmentParagraph2.className = 'pink';
dueDateContainer.appendChild(augustAssignmentParagraph2);
augustAssignmentParagraph2.textContent = augustMonthDayYear;

const augustDueParagraph = document.createElement('p');
dueDateContainer.appendChild(augustDueParagraph);
augustDueParagraph.textContent = 'Due Date: ';

const augustDueDate = document.createElement('time');
augustDueParagraph.appendChild(augustDueDate);
generatedAugustDate = DSTfunction('08/03/2021');
augustDueDate.textContent = generatedAugustDate;



const september = document.createElement('h3');
september.className = 'orange';
dueDateContainer.appendChild(september);
september.textContent = 'September';

const septemberAssignmentParagraph1 = document.createElement('p');
septemberAssignmentParagraph1.className = 'orange';
dueDateContainer.appendChild(septemberAssignmentParagraph1);
septemberAssignmentParagraph1.textContent = 'Assignment Date: ';

const septemberAssignmentDate1 = document.createElement('time');
septemberAssignmentParagraph1.appendChild(septemberAssignmentDate1);
septemberAssignmentDate1.textContent = '2021-09-23'

const septemberYearMonthDay = '2021-September-23';
firstDash = septemberYearMonthDay.indexOf('-');
monthDay = septemberYearMonthDay.substring(firstDash+1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = septemberYearMonthDay.substring(0, firstDash);
const septemberMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const septemberAssignmentParagraph2 = document.createElement('p');
septemberAssignmentParagraph2.className = 'orange';
dueDateContainer.appendChild(septemberAssignmentParagraph2);
septemberAssignmentParagraph2.textContent = septemberMonthDayYear;

const septemberDueParagraph = document.createElement('p');
dueDateContainer.appendChild(septemberDueParagraph);
septemberDueParagraph.textContent = 'Due Date: ';

const septemberDueDate = document.createElement('time');
septemberDueParagraph.appendChild(septemberDueDate);
generatedSeptemberDate = DSTfunction('09/23/2021');
septemberDueDate.textContent = generatedSeptemberDate;



const october = document.createElement('h3');
october.className = 'blue';
dueDateContainer.appendChild(october);
october.textContent = 'October';

const octoberAssignmentParagraph1 = document.createElement('p');
octoberAssignmentParagraph1.className = 'blue';
dueDateContainer.appendChild(octoberAssignmentParagraph1);
octoberAssignmentParagraph1.textContent = 'Assignment Date: ';

const octoberAssignmentDate1 = document.createElement('time');
octoberAssignmentParagraph1.appendChild(octoberAssignmentDate1);
octoberAssignmentDate1.textContent = '2022-10-14'                            // Changing years a final time

const octoberYearMonthDay = '2022-October-14';
firstDash = octoberYearMonthDay.indexOf('-');
monthDay = octoberYearMonthDay.substring(firstDash + 1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = octoberYearMonthDay.substring(0, firstDash);
const octoberMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const octoberAssignmentParagraph2 = document.createElement('p');
octoberAssignmentParagraph2.className = 'blue';
dueDateContainer.appendChild(octoberAssignmentParagraph2);
octoberAssignmentParagraph2.textContent = octoberMonthDayYear;

const octoberDueParagraph = document.createElement('p');
dueDateContainer.appendChild(octoberDueParagraph);
octoberDueParagraph.textContent = 'Due Date: ';

const octoberDueDate = document.createElement('time');
octoberDueParagraph.appendChild(octoberDueDate);
generatedOctoberDate = DSTfunction('10/14/2022');
octoberDueDate.textContent = generatedOctoberDate;



const november = document.createElement('h3');
november.className = 'yellow';
dueDateContainer.appendChild(november);
november.textContent = 'November';

const novemberAssignmentParagraph1 = document.createElement('p');
novemberAssignmentParagraph1.className = 'yellow';
dueDateContainer.appendChild(novemberAssignmentParagraph1);
novemberAssignmentParagraph1.textContent = 'Assignment Date: ';

const novemberAssignmentDate1 = document.createElement('time');
novemberAssignmentParagraph1.appendChild(novemberAssignmentDate1);
novemberAssignmentDate1.textContent = '2022-11-22'

const novemberYearMonthDay = '2022-November-22';
firstDash = novemberYearMonthDay.indexOf('-');
monthDay = novemberYearMonthDay.substring(firstDash + 1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = novemberYearMonthDay.substring(0, firstDash);
const novemberMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const novemberAssignmentParagraph2 = document.createElement('p');
novemberAssignmentParagraph2.className = 'yellow';
dueDateContainer.appendChild(novemberAssignmentParagraph2);
novemberAssignmentParagraph2.textContent = novemberMonthDayYear;

const novemberDueParagraph = document.createElement('p');
dueDateContainer.appendChild(novemberDueParagraph);
novemberDueParagraph.textContent = 'Due Date: ';

const novemberDueDate = document.createElement('time');
novemberDueParagraph.appendChild(novemberDueDate);
generatedNovemberDate = DSTfunction('11/22/2022');
novemberDueDate.textContent = generatedNovemberDate;



const december = document.createElement('h3');
december.className = 'purple';
dueDateContainer.appendChild(december);
december.textContent = 'December';

const decemberAssignmentParagraph1 = document.createElement('p');
decemberAssignmentParagraph1.className = 'purple';
dueDateContainer.appendChild(decemberAssignmentParagraph1);
decemberAssignmentParagraph1.textContent = 'Assignment Date: ';

const decemberAssignmentDate1 = document.createElement('time');
decemberAssignmentParagraph1.appendChild(decemberAssignmentDate1);
decemberAssignmentDate1.textContent = '2022-12-02'

const decemberYearMonthDay = '2022-December-02';
firstDash = decemberYearMonthDay.indexOf('-');
monthDay = decemberYearMonthDay.substring(firstDash + 1);
secondDash = monthDay.indexOf('-');
month = monthDay.substring(0, secondDash);
day = monthDay.substring(secondDash + 1);
year = decemberYearMonthDay.substring(0, firstDash);
const decemberMonthDayYear = month + ' ' + day + ',' + ' ' + year;

const decemberAssignmentParagraph2 = document.createElement('p');
decemberAssignmentParagraph2.className = 'purple';
dueDateContainer.appendChild(decemberAssignmentParagraph2);
decemberAssignmentParagraph2.textContent = decemberMonthDayYear;

const decemberDueParagraph = document.createElement('p');
dueDateContainer.appendChild(decemberDueParagraph);
decemberDueParagraph.textContent = 'Due Date: ';

const decemberDueDate = document.createElement('time');
decemberDueParagraph.appendChild(decemberDueDate);
generatedDecemberDate = DSTfunction('12/02/2022');
decemberDueDate.textContent = generatedDecemberDate;

