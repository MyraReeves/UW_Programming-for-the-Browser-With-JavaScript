// Use only the traversal methods described at the end of the class notes to complete the following:

// 1. Given the <body> element as variable "body", access the <main> node and log to the console.
const body = document.querySelector('body');
const bodyChildren = body.children;

const main = bodyChildren[0];
console.log(main);


// 2. Given the <ul> element as variable ul, access <body> and log to the console.
const ul = document.querySelector('ul');
const ulParentIsMain = ul.parentElement;

const bodyTag = ulParentIsMain.parentNode;
console.log(bodyTag);


// 3. Given the <p> element as var p, access the 3rd <li> and log to the console.
const p = document.querySelector('p');
const ulIsPreviousSiblingOfParagraph = p.previousElementSibling;

const thirdLi = ulIsPreviousSiblingOfParagraph.getElementsByTagName('li')[2]
console.log(thirdLi)
