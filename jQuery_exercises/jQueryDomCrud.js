/* *************************************************
            Instructions:
Add the jQuery script tag to your document.  Then...

1. Wrap your JS code in the jQuery document.ready method
2. Access (read) the data-color attribute of the <img>, log to the console.
3. Update the third <li> item ("Turbocharged"), set the class name to "highlight"
4. Create a new <a> element containing the text "Buy Now!" with an id of "cta" after the last <p>
5. Remove (delete) the last paragraph ("Available for purchase now...")
6. Create a listener on the "Buy Now!" link that responds to a click event.  When clicked, the "Buy Now!" link should be removed and replaced with text that says "Added to cart".  The class can be toggled on and off with a click as well.
****************************************************
*/

$(document).ready( function() {
    console.log('Ready to go!');    // Checks whether jQuery is loaded and ready


    const carPhoto = $('img');
    console.log(carPhoto.attr('data-color'))


    const listItems = $('li');
    // listItems[2].addClass('highlight')       Doesn't work.  Throws ".addClass() is not a function" error message 
    const thirdLi = listItems[2];
    // thirdLi.addClass('highlight');           Doesn't work.  Throws ".addClass() is not a function" error message

    // In-class lecture solution was:    $(listItems[2]).addClass('highlight')          ...which works! 🙌

    // Internet search says that the correct required syntax is .eq(2) , even though that wasn't demonstrated in the pdf notes!
    // $('li').eq(2).addClass('highlight');
    listItems.eq(2).addClass('highlight');
    

    let newAnchorTag = $('<a>');
    newAnchorTag.text('Buy Now!');
    newAnchorTag.attr('id', 'cta');
    $('main').append(newAnchorTag);


    $('p').remove();


    // $('a').on('click', (event) => {
    //     let $this = $(this)
    //     $('a').toggle()                 // Changes display style to "none", effectively removing the element from view
    // })

    $('a').click(function(e) {
        let $this = $(this);
        $this.toggleClass('clicked');       // When clicked, the <a> element will TOGGLE between 'clicked' class or an empty class
        $($this).text('Added to cart! 🛒')      // When clicked, the text content of the <a> element will PERMANENTLY change
        $($this).attr('id', '');            // When clicked, the id attribute will be PERMANENTLY changed to a blank/empty id
        });
});
