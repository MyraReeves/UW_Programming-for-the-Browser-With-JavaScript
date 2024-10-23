// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage

const attack = function (attackingPlayer, defendingPlayer, baseDamage, variableDamage){
    // The function should calculate total damage. This will equal baseDamage + a random integer between 0 and variableDamage:
    let randomAmount = Math.floor(Math.random() * variableDamage);
    let totalDamage = baseDamage + randomAmount;
  
    // Reduce the health property of the defendingPlayer by the amount of the calculated damage:
    defendingPlayer.health -= totalDamage;
  
    // Return a string describing the attack:
    return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage} points of damage! 
    \n${defendingPlayer.name} now has ${defendingPlayer.health} points left!`;
};
  
  
// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
let player1 = {
    name: 'Captain Hammer',
    health: 10 
};
  
let player2 = {
    name: 'Dr. Horrible',
    health: 10
};
  
console.log(attack(player1, player2, 0, 10));
console.log(attack(player2, player1, 0, 10));



// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}

// When a player's health reaches zero, end the game and announce that the player was defeated:
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);
