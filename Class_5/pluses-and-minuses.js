let counter = 0;

const countOnScreen = document.getElementById('count');

// When a user clicks the + element, the count should increase by 1 on screen.
const plusIncreases = document.getElementById('plus');
plusIncreases.addEventListener('click', () => {
    counter ++;
    console.log(`The count is now at: ${counter}`);
    countOnScreen.innerText = counter;
}
);


// When a user clicks the – element, the count should decrease by 1 on screen.
const minusDecreaes = document.getElementById('minus');
minusDecreaes.addEventListener('click', () => {
    counter --;
    console.log(`The count is now at ${counter}`);
    countOnScreen.innerText = counter;
}
);