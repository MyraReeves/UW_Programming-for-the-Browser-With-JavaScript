/* Create a function getDeck that returns an array of 52 cards. 
There are four suits (hearts, spades, clubs, diamonds). Each suit will have 13 cards: 
2 – 10 will have a val equal to the number
'Jack', 'Queen', and 'King' will all have a val of 10
'Ace' will have a val of 11
*/

const card = {
  val: 10,
  displayVal: 'Jack'
  suit: 'hearts',
};

// 13 Possible card faces =    '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'
// Count is 2 - 14                                                             11       12      13      14


const deck = []
const number = []     // Holds 2 thru Ace
const val = []            // Holds 2 thru 10
const suits = ['♥️ hearts', 'spades ♠️', '♦️ diamonds', 'clubs ♣️']


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

}
getDeck()


// CHECKS
console.log(`Deck length equals 52? ${deck.length === 52}`)

const randomCard = deck[Math.floor(Math.random() * 52)]

const cardHasVal =
  randomCard && randomCard.val && typeof randomCard.val === 'number'
console.log(`Random card has val? ${cardHasVal}`)

const cardHasSuit =
  randomCard && randomCard.suit && typeof randomCard.suit === 'string'
console.log(`Random card has suit? ${cardHasSuit}`)

const cardHasDisplayVal =
  randomCard &&
  randomCard.displayVal &&
  typeof randomCard.displayVal === 'string'
console.log(`Random card has display value? ${cardHasDisplayVal}`)

console.log('\n\n🃏 Here is the entire deck:')
console.log(deck)
