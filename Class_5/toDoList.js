// You will create a "To Do" list.  Each list item will be an <li> element, and will contain the following elements:
// a <span> with the item description
// an <a> link that allows you to delete the item

const findUnorderedList = document.querySelector('.today-list')
const findEachListItem = findUnorderedList.children;


// Add the following listeners / features:

// 1. If an li element is clicked, toggle the class "done" on the <li>
const toggleToDone = function(e) {
  this.classList = 'done';
};

// Adds event listener to each list item:
const addStrikeOut = function(){
  for (let iteration = 0; iteration < findEachListItem.length ; iteration ++){
    findEachListItem[iteration].addEventListener('click', toggleToDone)
  }
};
addStrikeOut()



// 2. If the Delete <a> is clicked, remove the <li>
// If a delete link is clicked, delete the li element / remove from the DOM
const deleteListItem = function(e){
  const neededLi = this.parentElement;    // this = .getElementsByClassName('delete')[index]
  neededLi.remove();
};

const ifDeleteClicked = function() {
  for (let index = 0; index < findEachListItem.length ; index ++){
    const deleteFunctionality = document.getElementsByClassName('delete')[index];
    deleteFunctionality.addEventListener('click', deleteListItem)
  }
};

ifDeleteClicked();



// 3. If an 'Add' link is clicked, add the item as a new list item.
const addListItem = function(e) {
  e.preventDefault();
  let input = document.getElementsByTagName('input')[0];
  let text = input.value; 
  let newListItem = document.createElement("li");
  newListItem.innerHTML = ('<span>' + `${text}` + '</span> <a class="delete">Delete</a>')
  findUnorderedList.appendChild(newListItem);
  addStrikeOut();           // Ensures this brand new <li> has functionality of toggling to Done class
  ifDeleteClicked();        // Ensures functionality of the 'delete' <a> on this brand new <li>
};

const addButtonFunctionality = document.getElementsByClassName('add-item')[0];
addButtonFunctionality.addEventListener('click', addListItem);
