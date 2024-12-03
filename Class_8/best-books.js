/*Using our in-class fetch exercise as a model, use the New York Times Developer APILinks to an external site. to create a page that:

1. Takes the user submission for year, month, and date.  You can assume that the input is valid.
2. Calls the New York Times API to find the best selling hardcover fiction books for that date
3. Display the following items for the first 5 books:
Title
Author
Description

Tips:
You'll need to sign up for an API key from https://developer.nytimes.com/Links to an external site.
Sign in and reference documentation at https://developer.nytimes.com/docs/books-product/1/routes/lists/%7Bdate%7D/%7Blist%7D.json/getLinks to an external site.

Extra Credit 1 pt: Display the image for each book
*/

const myKey = 'ZvE9LRUyFK0a8nZZpNecEKGrtZ6vjSIr'

const formEl = document.getElementById('best-books-form');
const yearEl = document.getElementById('year');
const monthEl = document.getElementById('month');
const dateEl = document.getElementById('date');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  // Fetch bestselling books for date and add top 5 to page:
fetch(`https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction/overview.json?api-key=${myKey}`)
.then(response => response.json())
.then(data => {const allBooks = data.results.books;
  let text = ""
  for (let i = 0; i < 5; i++) {
    text += "Title: " + allBooks[i].title + "<br> Author(s): " + allBooks[i].author + "<br> Description: " + allBooks[i].description + '<br> <img src="' + allBooks[i].book_image + '" alt="Image of the book cover" width="200" height="300"><br><br>';
  }
  document.getElementById("books-container").innerHTML = text;
})
.catch(error => console.log(error));

});
