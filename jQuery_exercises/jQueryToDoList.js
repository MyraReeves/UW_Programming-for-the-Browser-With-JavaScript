/*
This assignment replicates the results of the To-Do list exercise from Class 5, with the following added restrictions:

Not allowed to use plain JavaScript methods to access elements
(i.e. no getElementsBy{className, id, tagName, etc.}, no querySelector{All})
Not allowed to use any plain JavaScript event listeners (i.e. no addEventListener)
Not allowed to use any plain JavaScript className or classList properties.
Not allowed to use plain JavaScript methods to remove an element (i.e. removeChild)
Not allowed to use plain JavaScript methods to set innerHTML or innerText
Not allowed to use plain JavaScript methods to add children (i.e. appendChild)
You will also need to add in the <script> tags (for both your script, and the jQuery script)!
*/

// Step 4. Wrap your code in the jQuery function that ensures your DOM has been fully loaded:
$(document).ready( function() {
    console.log('jQuery has been loaded and is ready to go!');    // Checks whether the jQuery library is loaded
  
    // Add the following listeners / features...
  
    // Step 1. If an <li> element is clicked, toggle the class "done" on the <li>:
    const allListItems = $('li');         // Finds all the list items and stores that array in a variable
  
    $(allListItems).click(function(e) {
      let $this = $(this);
      $this.toggleClass('done');       // When clicked, the <li> element will TOGGLE between a class of 'done' and being blank
    });
    

  

  // Step 2. If the Delete <a> is clicked, remove the <li>:
  const unorderedList = $('ul');                // Finds the unordered list
  const allClassDeleteElements = $('.delete');    // Locates all elements with a class of 'delete' and stores that array in a variable

  /*  
  Note #1 - The result of the following...
          $(allClassDeleteElements).click(function(event) {
          let $this = $(this);
          $this.remove();
          });
  ...would be that when a delete button is clicked only that one <a> button is removed, NOT its <li> element:


  Note #2 - And the result of the following...
          $(allClassDeleteElements).click(function(event) {
          let thisLi = $('li');
          thisLi.remove();
          });
  ...would be that when ANY delete button is clicked, ALL <li> elements on the page are deleted!
  */


  // I came up with a solution using the addition (upon click) of a new id on that clicked list item, which can then be targeted (as the next command occurring within the click listener function) so that only that single newly marked list item gets deleted:
  $(allClassDeleteElements).each(function () {
    $(this).on('click', function () {
      let parentOfClicked = $(this).parent()
      $(parentOfClicked).attr('id', 'deleteMe');
      $('#deleteMe').remove()
    })
  });

    


    // Step 3. Using a function, if an 'Add' link is clicked add the item as a new list item to the list:
    // First part, creating the function:
    const addListItem = function(e) {
        e.preventDefault();
        let newlistItem = $('<li>');
        $(unorderedList).append(newlistItem);
        let newSpan = $('<span>');
        let text = $('input').val();
        newSpan.text(text);
        $(newlistItem).append(newSpan);
        let newDeleteButton = $('<a>');
        newDeleteButton.text('Delete');
        newDeleteButton.attr('class', 'delete');
        $(newlistItem).append(newDeleteButton);

        // Adds functionality to the Delete button of newly created list item:
        $(newDeleteButton).on('click', function () {
          let parentOfClicked = $(this).parent()
          $(parentOfClicked).attr('id', 'deleteMe');
          $('#deleteMe').remove()
        })
    
        // Adding the "done" class to the new list item if it's clicked on:
        let newlyCreatedListItem = $('li');
        $(newlyCreatedListItem).click(function() {
        // The following commented out code alternative (ie toggling the class instead) would turn off the toggle on earlier list items!
        // let $thisListItem = $(this);
        // $thisListItem.toggleClass('done');
        let $thisListItem = $(this);
        $thisListItem.addClass('done');
        });
    };

    // Second part, assigning the event listener:
    $('.add-item').on( "click", addListItem);


  
  });
  