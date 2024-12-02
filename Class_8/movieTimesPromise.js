let movieDataIsLoading = false;

let movieTimesPromise = new Promise(
    function (resolve, reject) {
        movieDataIsLoading = true;
        setTimeout(function () {
            const movieTime = {
                name: 'Captain Marvel',
                time: '19:20',
                location: 'Regal 18',
            };
            resolve(movieTime);
        }, 1500);
    }
);

// ---------------------------------------------------------------------------------------

// Show the object in the console:
movieTimesPromise.then((resolved_response) => {
    console.log(resolved_response)
    return resolved_response          // Pass the value onward so that it can be used below
});


// Convert into JSON object:
movieTimesPromise.then(
    (data_passed_from_above) => {
        console.log(JSON.stringify(data_passed_from_above))
    }
);

// ------------------------------------------------------
// Adding an error catch:
movieTimesPromise.catch( (error) => {
    console.log("The following error occurred: ", error)}
);

// -----------------------------------------------------
// No matter what, the loading status should be set back to false:
movieTimesPromise.finally( () => {
    movieDataIsLoading = false;}
);


/* -----------------------------------------------------
Alternatively, the above could have been chained together like so:

movieTimesPromise.then(
    (response) => {
    console.log(response);
    return response;}
).then(
    (data) => {
    console.log(JSON.stringify(data));}
).catch(
    (error) => {
        console.log("The following error occurred: ", error)}
).finally(
    () => {
        movieDataIsLoading = false;}
);

---------------------------------------------------------
*/
