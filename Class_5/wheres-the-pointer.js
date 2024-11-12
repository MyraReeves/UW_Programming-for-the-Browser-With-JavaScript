// Using a single event listener:
// Listen for a user clicks on a <td> element within a table.  The innerHTML of the <td> element should show the x, y coordinates of the mouse from the click event.
// clientX, clientY = coordinates from the top left of the browser window.


const pointerLocation = function(event) {
    let xCoordinate = event.clientX;
    let yCoordinate = event.clientY;
    this.innerHTML = `X axis: ${xCoordinate}` + '<br>' + `Y axis: ${yCoordinate}`
    // "this" is the <td> that was selected by the mouse click
};


// Locates all <td> squares of the table:
const findTDs = document.querySelectorAll('td');


// Adds event listener to each <td> of table by iterating thru each.  Sets event to be mouse click:
for (let i = 0; i < findTDs.length; i++) {
    findTDs[i].addEventListener('click', pointerLocation);
};
