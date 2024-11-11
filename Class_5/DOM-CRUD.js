// 1. Create a new <a> element containing the text "Buy Now!" with an id of "cta" after the last <p>
const creatingA = document.getElementsByTagName('main')[0];
const buyNow = document.createElement('a');
buyNow.textContent = "Buy Now!";
buyNow.setAttribute("id", "cta");
creatingA.appendChild(buyNow);


// 2. Access (read) the data-color attribute of the <img>. Log to the console.
const imageTag = document.querySelector('img');              // .getElementsByTagName('img') didn't work  ;  .getElementsByTagName('img src') didn't work, either
let dataColorAttribute = imageTag.getAttribute('data-color');
console.log(dataColorAttribute);


// 3. Update the third <li> item ("Turbocharged"). Set the class name to "highlight"
document.getElementsByTagName('li')[2].className = "highlight";


// 4. Remove (delete) the last paragraph (starts with "Available for purchase now…")
// const removeParagraph = document.querySelector('p');
// removeParagraph.remove();

// OR, written as a single line of code:
document.querySelector('p').remove();
