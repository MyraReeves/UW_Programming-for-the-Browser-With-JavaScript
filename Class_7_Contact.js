const theFormContainer = document.getElementById('contact-form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const contactReason = document.getElementById('contact-kind');
const job = document.getElementById('job');
const jobTitle = document.getElementById('jobTitle');
const jobError = document.getElementById('jobError');
const urlError = document.getElementById('urlError');
const website = document.getElementById('website');
const language = document.getElementById('language');
const codingSelection = document.getElementById('coding-language');
const languageError = document.getElementById('language-error');
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
// _____________________________________________________________


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
};
// _________________________________________________________________


// Function to ensure a job title is provided:
const jobTitleValidation = () => {
    if (jobTitle.value){
        jobError.style.visibility = 'hidden';
        jobTitle.parentElement.classList.remove('invalid');
    }
    else {
        jobTitle.parentElement.classList.add('invalid');
        jobError.style.visibility = 'visible';
    }
};

// Function to ensure a company website is provided
// and that url is valid for regex of /https?\:\/\/.+\..+/ 
const websiteValidation = () => {
    const websiteRegEx = /https?\:\/\/.+\..+/;
    if (website.value){
        if (websiteRegEx.test(website.value)){
            // If true, remove invalid class on the parent of the element:
            website.parentElement.classList.remove('invalid');
            // and hide urlError message:
            urlError.style.visibility = 'hidden';
        }
        else {
            website.parentElement.classList.add('invalid');
            urlError.style.visibility = 'visible';
        }
    }
    else {
        // If false, set invalid class on the parent of the element and show a message to the user
        website.parentElement.classList.add('invalid');
        urlError.style.visibility = 'visible';
    }
};

// Validates that coding language is changed:
const languageSelection = () => {
    console.log('A coding language was selected!');
    languageError.style.visibility = 'hidden';
};

// Function to hide/show additional info under selection choice:
const selectionChoices = (selectedElement) => {
    const selectedValue = selectedElement.value;
    if (selectedValue === 'job') {
        job.classList.remove('hiddenOption');
        language.classList.add('hiddenOption');
        jobError.style.visibility = 'visible';
        urlError.style.visibility = 'visible';
        jobTitle.parentElement.classList.add('invalid');
        website.parentElement.classList.add('invalid');
        job.addEventListener('input', jobTitleValidation);
        website.addEventListener('input', websiteValidation);
    }
    else if (selectedValue === 'coding'){
        language.classList.remove('hiddenOption');
        job.classList.add('hiddenOption');
        languageError.style.visibility = 'visible'; //Shows message if no change
        codingSelection.addEventListener('change', languageSelection)
    }
};

// Call above function upon any change to the contactReason field:
contactReason.addEventListener('change', () => {
    selectionChoices(contactReason);
});


// _____________________________________________________________________

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
// ________________________________________________________________


theFormContainer.addEventListener('submit', (eventObject) => {
    console.log('Form submission attempted...');
    if(
        // Check Name should be 3 characters or more
        nameLength(userName, 3) &&

        // Email should match regex /\w+@\w+\.\w+/
        validateEmail(email) &&

        // Check Message should be 10 characters or more
        messageLength(message, 10)
    ){
        console.log('GOOD form')
    }

    // 4. If any required item is NOT valid, preventDefault() on the submit listener and log 'Bad input' to console
    else {
        eventObject.preventDefault();
        console.log("BAD INPUT");
    }
});
