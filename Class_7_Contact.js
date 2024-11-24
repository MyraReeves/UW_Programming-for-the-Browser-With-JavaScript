const theFormContainer = document.getElementById('contact-form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const contactReason = document.getElementById('contact-kind');
const job = document.getElementById('job');
// const website = document.getElementById('website');
const language = document.getElementById('language');
const message = document.getElementById('message');



// Function to check for minimum length of name:
const nameLength = (input, min) => {
    if (input.value.trim().length >= min) {
        // If true, remove invalid class on the parent of the element
        input.parentElement.classList.remove('invalid');
        document.getElementById("errorName").style.visibility = 'hidden'
        return true;
    }
    else {
        // If false, set invalid class on the parent of the element and show a message to the user
        input.parentElement.classList.add('invalid');
        document.getElementById("errorName").style.visibility = 'visible'
        return false;
    }
};


// Function to check if email matches regex  /\w+@\w+\.\w+/
const validateEmail = (input) => {
    const regEx = /\w+@\w+\.\w+/;
    if (regEx.test(input.value.trim())){
        // If true, remove invalid class on the parent of the element
        input.parentElement.classList.remove('invalid');
        document.getElementById("emailError").style.visibility = 'hidden'
        return true;
    }
    else {
        // If false, set invalid class on the parent of the element and show a message to the user
        input.parentElement.classList.add('invalid');
        document.getElementById("emailError").style.visibility = 'visible'
        return false;
    }
}

// Function to check for minimum length of message:
const messageLength = (input, min) => {
    if (input.value.trim().length >= min) {
        // If true, remove invalid class on the parent of the element
        input.parentElement.classList.remove('invalid');
        document.getElementById("errorMessage").style.visibility = 'hidden'
        return true;
    }
    else {
        // If false, set invalid class on the parent of the element and show a message to the user
        input.parentElement.classList.add('invalid');
        document.getElementById("errorMessage").style.visibility = 'visible'
        return false;
    }
};

// Function to hide/show additional info under selection choice:
const selectionChoices = (selectElement) => {
    const selectedValue = selectElement.value;
    if (selectedValue === 'job') {
        job.classList.remove('hiddenOption');
        language.classList.add('hiddenOption');
    }
    else if (selectedValue === 'coding'){
        language.classList.remove('hiddenOption');
        job.classList.add('hiddenOption');
    }
};

contactReason.addEventListener('change', () => {
    selectionChoices(contactReason);
});


theFormContainer.addEventListener('submit', (eventObject) => {
    console.log('Form submission attempted...');
    if(
        // Check Name should be 3 characters or more
        nameLength(userName, 3) &&      // shorthand for if this === true and

        // Email should match regex /\w+@\w+\.\w+/
        validateEmail(email) &&          // ...if this === true

        // Check Message should be 10 characters or more
        messageLength(message, 10)       // ...if this === true and...
    ){
        console.log('GOOD form')
    }

    // 4. If any required item is NOT valid, preventDefault() on the submit listener and log 'Bad input' to console
    else {
        eventObject.preventDefault();
        console.log("BAD INPUT");
    }
})
