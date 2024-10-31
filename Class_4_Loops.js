/* Based on the kind of meat, this function should check whether the internalTemp is above the values below (from the chart in pdf slides), and return true if it is.

chicken 165,     beef 'rare' 125     beef 'medium' 135     beef 'well' 155      */

const foodIsCooked = (kind, internalTemp, doneness) => {
    if (kind === 'chicken' && internalTemp > 165){
      return true;
    }
    else if(kind === 'beef' && doneness === 'rare' && internalTemp > 125){
      return true;
    }
    else if(kind === 'beef' && doneness === 'medium' && internalTemp > 135){
      return true;
    }
    else if(kind === 'beef' && doneness === 'well' && internalTemp > 155){
      return true;
    }
    else {
      return false;
    }
  };
  
  // Test function
  console.log(foodIsCooked('chicken', 90)); // should be false
  console.log(foodIsCooked('chicken', 190)); // should be true
  console.log(foodIsCooked('beef', 138, 'well')); // should be false
  console.log(foodIsCooked('beef', 138, 'medium')); // should be true
  console.log(foodIsCooked('beef', 138, 'rare')); // should be true


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*  Given a complete deck of cards, loop through and log every 
property of every card to the console. 
The deck is provided below.
*/

const cards = [
    { val: 2, displayVal: '2', suit: 'hearts' },
    { val: 3, displayVal: '3', suit: 'hearts' },
    { val: 4, displayVal: '4', suit: 'hearts' },
    { val: 5, displayVal: '5', suit: 'hearts' },
    { val: 6, displayVal: '6', suit: 'hearts' },
    { val: 7, displayVal: '7', suit: 'hearts' },
    { val: 8, displayVal: '8', suit: 'hearts' },
    { val: 9, displayVal: '9', suit: 'hearts' },
    { val: 10, displayVal: '10', suit: 'hearts' },
    { val: 10, displayVal: 'Jack', suit: 'hearts' },
    { val: 10, displayVal: 'Queen', suit: 'hearts' },
    { val: 10, displayVal: 'King', suit: 'hearts' },
    { val: 11, displayVal: 'Ace', suit: 'hearts' },
    { val: 2, displayVal: '2', suit: 'diamonds' },
    { val: 3, displayVal: '3', suit: 'diamonds' },
    { val: 4, displayVal: '4', suit: 'diamonds' },
    { val: 5, displayVal: '5', suit: 'diamonds' },
    { val: 6, displayVal: '6', suit: 'diamonds' },
    { val: 7, displayVal: '7', suit: 'diamonds' },
    { val: 8, displayVal: '8', suit: 'diamonds' },
    { val: 9, displayVal: '9', suit: 'diamonds' },
    { val: 10, displayVal: '10', suit: 'diamonds' },
    { val: 10, displayVal: 'Jack', suit: 'diamonds' },
    { val: 10, displayVal: 'Queen', suit: 'diamonds' },
    { val: 10, displayVal: 'King', suit: 'diamonds' },
    { val: 11, displayVal: 'Ace', suit: 'diamonds' },
    { val: 2, displayVal: '2', suit: 'clubs' },
    { val: 3, displayVal: '3', suit: 'clubs' },
    { val: 4, displayVal: '4', suit: 'clubs' },
    { val: 5, displayVal: '5', suit: 'clubs' },
    { val: 6, displayVal: '6', suit: 'clubs' },
    { val: 7, displayVal: '7', suit: 'clubs' },
    { val: 8, displayVal: '8', suit: 'clubs' },
    { val: 9, displayVal: '9', suit: 'clubs' },
    { val: 10, displayVal: '10', suit: 'clubs' },
    { val: 10, displayVal: 'Jack', suit: 'clubs' },
    { val: 10, displayVal: 'Queen', suit: 'clubs' },
    { val: 10, displayVal: 'King', suit: 'clubs' },
    { val: 11, displayVal: 'Ace', suit: 'clubs' },
    { val: 2, displayVal: '2', suit: 'spades' },
    { val: 3, displayVal: '3', suit: 'spades' },
    { val: 4, displayVal: '4', suit: 'spades' },
    { val: 5, displayVal: '5', suit: 'spades' },
    { val: 6, displayVal: '6', suit: 'spades' },
    { val: 7, displayVal: '7', suit: 'spades' },
    { val: 8, displayVal: '8', suit: 'spades' },
    { val: 9, displayVal: '9', suit: 'spades' },
    { val: 10, displayVal: '10', suit: 'spades' },
    { val: 10, displayVal: 'Jack', suit: 'spades' },
    { val: 10, displayVal: 'Queen', suit: 'spades' },
    { val: 10, displayVal: 'King', suit: 'spades' },
    { val: 11, displayVal: 'Ace', suit: 'spades' }
];
  
const logCardDeck = (deck => {
for (let card = 0 ; card < cards.length ; card++){

    console.log('Card properties: \nval is: ', cards[card].val , '\ndisplayVal is: ', cards[card].displayVal , '\nsuit is: ' , cards[card].suit)

}
})();
// I turned it into an IIFE because there didn't appear any reason not to.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* Create a function called getDeck that returns an array of 52 cards. 
There are four suits (hearts, spades, clubs, diamonds). Each suit will have 13 cards: 
2 – 10 will have a val equal to the number
'Jack', 'Queen', and 'King' will all have a val of 10
'Ace' will have a val of 11

const card = {
  val: 10,
  displayVal: 'Jack'
  suit: 'hearts',
};                                                                                               */


const deck = [];
const number = [];     // Holds 2 thru Ace
const val = [];            // Holds 2 thru 10
const suits = ['♥️ hearts', 'spades ♠️', '♦️ diamonds', 'clubs ♣️'];

// 13 Possible card faces =    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'
// Count is 2 - 14                                                             11       12      13      14


// IIFE block to get face cards of two thru Ace:
const getNumbers = (function (){
  for (let displayValue = 2; displayValue <= 14 ; displayValue++){
    if (displayValue == 11){
      number.push('Jack')
    }
    else if (displayValue == 12){
      number.push('Queen')
    }
    else if (displayValue == 13){
      number.push('King')
    }
    else if (displayValue == 14){
      number.push('Ace')
    }
    else {
      number.push(displayValue.toString())                // Converts integer to string before pushing 2 thru 10 to array
    }
  }
})();



// IIFE block to get numbers two thru ten:              // Not needed for solution
// const getValue = (function (){
//   for (let value = 2; value <= 10 ; value++){
//     val.push(value)
//   }
// }
// )();



const getDeck = () => {
  for (let index = 0; index < suits.length; index++){           // 4 loops. One for each suit
    for(let i = 0; i < number.length; i++){                       // Inside of which are 13 loops. One for each displayVal
        if (number[i] == 'Jack'){
          card = {
            val: 10,
            displayVal: number[i],
            suit: suits[index],
          }
        }
        else if (number[i] == 'Queen'){
          card = {
            val: 10,
            displayVal: number[i],
            suit: suits[index],
          }
        }
        else if (number[i] == 'King'){
          card = {
            val: 10,
            displayVal: number[i],
            suit: suits[index],
          }
        }
        else if (number[i] == 'Ace'){
          card = {
            val: 11,
            displayVal: number[i],
            suit: suits[index],
          }
        }
        else {
          card = {
            val: 2 + i,
            displayVal: number[i],
            suit: suits[index],
          }
        }
        deck.push(card)
    }     // end of displayVal loop
  }  // end of suit loop
};
getDeck();


// CHECKS
console.log(`Deck length equals 52? ${deck.length === 52}`);

const randomCard = deck[Math.floor(Math.random() * 52)];

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === 'number'
console.log(`Random card has val? ${cardHasVal}`);

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === 'string'
console.log(`Random card has suit? ${cardHasSuit}`);

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string'
console.log(`Random card has display value? ${cardHasDisplayVal}`);

console.log('\n\n🃏 Here is the entire deck:')
console.log(deck);
