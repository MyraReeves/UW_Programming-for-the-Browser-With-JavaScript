
// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });


const fetchPromise = new Promise((resolve, reject) => {
    const data = fetch('https://jsonplaceholder.typicode.com/todos/1');
    resolve(data);
    reject(data);
});

fetchPromise.then(response => response.json()).then(json => console.log(json)).catch(error => console.log("An error occurred!"));


const fetchStarWarsData = new Promise((resolve, reject) => {
    const starWarsData = fetch('https://swapi.dev/api/people/1/');
    resolve(starWarsData);
    reject(starWarsData);
});

fetchStarWarsData.then(response => response.json())
.then(json => console.log(json));



// NY Times best seller hardcover fetch:
const myKey = 'ZvE9LRUyFK0a8nZZpNecEKGrtZ6vjSIr'
fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${myKey}`)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));