const deck = []
const number = []     // Holds 2 thru Ace
const val = []            // Holds 2 thru 10
const suits = ['hearts ♥️', 'spades ♠️', 'diamonds ♦️', 'clubs ♣️']


// Get face cards of two thru Ace:
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

const getDeck = (function (){
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
})();



//////////////////////////////////////////////////////////////////////////////////////////////////////////



// 1. Create a class CardPlayer...
class CardPlayer{

    // ...with a constructor that accepts one argument:  name -  a string equal to name passed in by the player (or dealer)
    constructor(name){                  //When new CardPlayer is called (with a name argument), it should return an object with the following properties and method:

        // name = string equal to name passed in
        this.name = name;

        // hand = array initially equal to an empty array
        this.hand = [];
    }
        // drawCard method = function with no arguments. Selects a card at random from the deck, and adds to hand array.  This does not need to remove the card from the deck (so theoretically a player could draw the same card multiple times - that's okay for this scenario).
    drawCard() {
        this.hand.push(deck[Math.floor(Math.random() * 52)])
    }

};



// 2. Create two new CardPlayer instances as variables. Name the first one 'Player'. Name the second one 'Dealer'.
const Player = new CardPlayer('Player - DannyOcean');
const Dealer = new CardPlayer('Dealer - FrankCatton');



//3. Write a function calcPoints, that accepts one argument: hand - Array - Array of card objects with properties val, displayVal, and suit
const calcPoints = (dotHand) => {
    // This function will calculate the total number of points the hand is worth. every card will be worth its val, EXCEPT each Ace card can be treated as either 1 or 11.
    sumOfHand = 0;
    isSoft = false;
    for(let i = 0 ; i < dotHand.length ; i++){
        if (dotHand[i].val == 11){
            // By default, an Ace should be treated as being worth 11 for purposes of calculating the total:
            if ((sumOfHand + dotHand[i].val) > 21) {
                // If the sum of the val of all the cards in the hand would exceed 21, if an Ace were valued as 11, then the Ace should be valued at 1
                sumOfHand += 1
            }
            else {
                sumOfHand += dotHand[i].val          // Same as sum += 11 because dotHand[i].val equals 11
                isSoft = true;
            }
        }
        else {
            sumOfHand += dotHand[i].val
        }
    }
    /* This function should return an object with the following properties:
    total - the number point value of the hand, 
    isSoft - boolean (true if there is an Ace in the hand that is being counted as 11 points).   */
    return {total: sumOfHand, isSoft};
};

// Testing with 3 cards.  Should only add 11 to sum (and thereby return 'true') if Ace is in first or second drawCard, unless sum of first & second is <= 10
// Player.drawCard()
// Player.drawCard()
// Player.drawCard()
// console.log("Player:", Player)
// console.log("Player.hand = ", Player.hand)
// console.log("val of Player.hand = ", Player.hand[0].val)
// console.log("val of Player.hand = ", Player.hand[1].val)
// console.log("val of Player.hand = ", Player.hand[2].val)
// console.log(calcPoints(Player.hand))



calcPoints(Player.hand)


/*4. Write a function dealerShouldDraw, that accepts one argument:
dealerHand - Array - Array of card objects with properties val, displayVal, and suit
This function should determine whether the dealer should draw another card or not (see rules above).

Returns a boolean (true or false).  True means the dealer should draw another card, false means the dealer should end their turn.

Hint: Use the calculateScore function to determine the dealer's total points.  Use the isSoft property passed back from that function to determine if the dealer has an Ace that is being counted as 11
*/
const dealerShouldDraw = (dealerhand) => {

};






// const blackjackDeck = getDeck();

// /**
//  * Represents a card player (including dealer).
//  * @constructor
//  * @param {string} name - The name of the player
//  */
// class CardPlayer {}; //TODO


// /**
//  * Calculates the score of a Blackjack hand
//  * @param {Array} hand - Array of card objects with val, displayVal, suit properties
//  * @returns {Object} blackJackScore
//  * @returns {number} blackJackScore.total
//  * @returns {boolean} blackJackScore.isSoft
//  */
// const calcPoints = (hand) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Determines whether the dealer should draw another card.
//  * 
//  * @param {Array} dealerHand Array of card objects with val, displayVal, suit properties
//  * @returns {boolean} whether dealer should draw another card
//  */
// const dealerShouldDraw = (dealerHand) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Determines the winner if both player and dealer stand
//  * @param {number} playerScore 
//  * @param {number} dealerScore 
//  * @returns {string} Shows the player's score, the dealer's score, and who wins
//  */
// const determineWinner = (playerScore, dealerScore) => {
//   // CREATE FUNCTION HERE

// }

// /**
//  * Creates user prompt to ask if they'd like to draw a card
//  * @param {number} count 
//  * @param {string} dealerCard 
//  */
// const getMessage = (count, dealerCard) => {
//   return `Dealer showing ${dealerCard.displayVal}, your count is ${count}.  Draw card?`
// }

// /**
//  * Logs the player's hand to the console
//  * @param {CardPlayer} player 
//  */
// const showHand = (player) => {
//   const displayHand = player.hand.map((card) => card.displayVal);
//   console.log(`${player.name}'s hand is ${displayHand.join(', ')} (${calcPoints(player.hand).total})`);
// }

// /**
//  * Runs Blackjack Game
//  */
// const startGame = function() {
//   player.drawCard();
//   dealer.drawCard();
//   player.drawCard();
//   dealer.drawCard();

//   let playerScore = calcPoints(player.hand).total;
//   showHand(player);
//   while (playerScore < 21 && confirm(getMessage(playerScore, dealer.hand[0]))) {
//     player.drawCard();
//     playerScore = calcPoints(player.hand).total;
//     showHand(player);
//   }
//   if (playerScore > 21) {
//     return 'You went over 21 - you lose!';
//   }
//   console.log(`Player stands at ${playerScore}`);

//   let dealerScore = calcPoints(dealer.hand).total;
//   while (dealerScore < 21 && dealerShouldDraw(dealer.hand)) {
//     dealer.drawCard();
//     dealerScore = calcPoints(dealer.hand).total;
//     showHand(dealer);
//   }
//   if (dealerScore > 21) {
//     return 'Dealer went over 21 - you win!';
//   }
//   console.log(`Dealer stands at ${dealerScore}`);

//   return determineWinner(playerScore, dealerScore);
// }
// // console.log(startGame());


// Extra Credit:  Separate game visible on HTML page:

// IIFE to welcome player to blackjack game by name:
const welcome = (function (){
    const playerName = prompt("Hello!  What is your name?");
    const hello = document.createElement("p");
    hello.innerHTML = "Welcome to the blackjack table, " + playerName + "! <br>Good luck!";
    const insertHello = document.getElementById("hello");
    insertHello.appendChild(hello);
}
)();

let myButton = document.getElementById("JSbutton");             // Accesses HTML div with id "JSbutton"


const start = (function (){
const startButton = document.createElement('button');            // Creates a button element
startButton.className = 'start';                                 // Sets class name for coloration styling
startButton.innerHTML = 'Start Game';                            // Writes words "Start Game" on button
myButton.appendChild(startButton);                               // Pushes "Start" button onto HTML page
startButton.addEventListener('click', initGame);                 // When "Start" button is clicked on, starts the initGame function
})();


function initGame() {
    // const startButton = document.getElementByClass('start');     // Gets "Start" button so that it can be removed
    // startButton.remove();                                        // Removes "Start" button from page, now that it has been clicked on

    Player.drawCard();                                              // Deals first hand to player

    const displayCard = document.createElement("p");
    displayCard.innerText = `Your first card is a ${Player.hand[0].displayVal} of ${Player.hand[0].suit}`
    const insertDisplayCard = document.getElementById("gameContent");
    insertDisplayCard.appendChild(displayCard);

    const dealButton = document.createElement('button');            // Creates a button element
    dealButton.className = 'deal';                                 // Sets class name for coloration styling
    dealButton.innerHTML = 'Draw Another Card';                    // Writes words on button
    myButton.appendChild(dealButton);                              // Pushes button onto HTML page
    dealButton.addEventListener('click', dealNewCard);             // When button is clicked on, starts the dealNewCard function

    const stayButton = document.createElement('button');           // Creates a button element
    stayButton.className = 'stay';                                 // Sets class name for coloration styling
    stayButton.innerHTML = '"Stay" - Finalize My Hand';              // Writes words on button
    myButton.appendChild(stayButton);                              // Pushes button onto HTML page
    stayButton.addEventListener('click', dealerTurn);                  // When button is clicked on, starts the dealNewCard function
};


function dealNewCard(){
    Player.drawCard();                                           // Draws a new card
    calcPoints(Player.hand);                                     // Provides sum for player
    console.log(calcPoints(Player.hand))
    const displayCard = document.createElement("p");
    for(let i = 1 ; i < Player.hand.length ; i++){
        let display = Player.hand[i].displayVal
        let cardSuit = Player.hand[i].suit
        displayCard.innerText = `Your next card is a ${display} of ${cardSuit} ... You are at ${calcPoints(Player.hand[0])} points`
    };
    const insertDisplayCard = document.getElementById("gameContent");
    insertDisplayCard.appendChild(displayCard);
};

function dealerTurn(){

}


/* When new CardPlayer is called (with a name argument), it should return an object with the following properties and method: 
name - string equal to name passed in
hand - array initially equal to an empty array
drawCard - function with no arguments. Selects a card at random from the deck, and adds to hand array.  This does not need to remove the card from the deck (so theoretically a player could draw the same card multiple times - that's okay for this scenario).
*/