// Practicing with forEach:
const loggingWin = (...results) => {
    let arrayOfResults = [...results]
    arrayOfResults.forEach(result => {
      console.log(result.w)
    })
  };
  
  loggingWin({w: 3,  d: 1, l: 0}, {w: 4, d: 5, l: 3}, {w: 5, d: 30, l:40});            //Result:  3, 4, 5 
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const RESULT_VALUES = {
    w: 3,
    d: 1,
    l: 0
  }
  
  /*
    Takes a single result string and (one of 'w', 'l', or 'd') 
    and returns the point value
    
    @param {string} result 
    @returns {number} point value
  */
  
  // Using if/else statement and a string that is only one letter long:
  const getPointsFromResult1 = (result) => {
    if (result == 'w'){
      pointValue = 3
    }
    else if (result == 'd'){
      pointValue = 1
    }
    else {
      pointValue = 0
    };
  
    return pointValue;
  }
  console.log('w has a point value of ' + getPointsFromResult1('w'));             // w has a point value of 3
  console.log('d has a point value of ' + getPointsFromResult1('d'));             // d has a point value of 1
  console.log('l has a point value of ' + getPointsFromResult1('l'));             // d has a point value of 1
  
  
  // Using a 3-part object to show the point value of each string key.   Ie.  "{string} result returns {number} point value"
  const getPointsFromResult2 = (result) => {
    console.log("A 'w' result returns", result.w, 'points \n' + "A 'd' result returns", result.d, 'points \n' + "An 'l' result returns", result.l, 'points');
  
    // Creating an array of the point values:
    let win = result.w;
    let draw = result.d;
    let loss = result.l;
    let RESULT_VALUES_ARRAY = [win, draw, loss];
    console.log(RESULT_VALUES_ARRAY);                 // [3, 1, 0]
  
    // Displaying the point values inside the array using .forEach:
    RESULT_VALUES_ARRAY.forEach(result => {console.log(result)})                       // 3      // 1      // 0
    
    // The above .forEach is the same as requesting each index separately:
    console.log(RESULT_VALUES_ARRAY[0])               // 3
    console.log(RESULT_VALUES_ARRAY[1])               // 1
    console.log(RESULT_VALUES_ARRAY[2])               // 0
    // which is RESULT_VALUES[result] where a 3 points 'w' result is at index 0, a one point 'd' result is at index 1, and a zero points 'l' result is at index 2.
  
    return RESULT_VALUES_ARRAY;
  }
  testString = {w: 3, d: 1, l: 0};
  getPointsFromResult2(testString);
  
  
  
  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Create a getTotalPoints function which accepts a string of results
  // including wins, draws, and losses i.e. 'wwdlw'
  // Returns total number of points won
  
  //    win = w;
  //    draw = d;
  //    loss = l;
  //    wwdlw = w + w + d + l + w;
  //    RESULT_VALUES = {w: 3, d: 1, l: 0}
  console.log("\n\nResults from the getTotalPoints function are below")
  
  const winValue = RESULT_VALUES.w;
  const drawValue = RESULT_VALUES.d;
  const lossValue = RESULT_VALUES.l;
  
  const getTotalPoints = (resultsString) => {
    let w = winValue;
    let d = drawValue;
    let l = lossValue;
    let resultsStringArray = resultsString.split('');
    let sum = 0;
    resultsStringArray.forEach(resultInArray => {
      if (resultInArray == 'w'){
        sum += w
      }
      else if (resultInArray == 'd'){
        sum += d
      }
      else {sum += l}
    } )
  
    // console.log("If the string of results is: ", resultsString, "\nThen the total number of points is: ", sum)
    return sum;
  };
  
  // Checking getTotalPoints:
  console.log(getTotalPoints('wwdlw'));         // 10
  console.log(getTotalPoints('wwdl'));          // 7
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  // Create an orderTeams function that accepts as many team objects as desired, 
  // each argument is a team object in the format { name, results }
  // i.e. {name: 'Sounders', results: 'wwlwdd'}
  // Logs each entry to the console as "Team name: points"
  console.log("\n\nResults from the orderTeams function are below")
  
  const orderTeams = (...teamObjects) => {
    let teamArray = [...teamObjects]
  
    teamArray.forEach(team => {
      let teamName = team.name
      let resultsString = team.results
      points = getTotalPoints(resultsString)
      console.log(teamName + ": " + points)
    })
  };
  
  
  // Checking orderTeams:
  orderTeams(
    { name: 'Sounders', results: 'wwdl' },
    { name: 'Galaxy', results: 'wlld' }
  );
  // should log the following to the console:
  // Sounders: 7
  // Galaxy: 4