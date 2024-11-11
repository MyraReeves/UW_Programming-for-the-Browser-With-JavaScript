// 1. Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const changeHeader = document.getElementById('weather-head');
changeHeader.innerText = "February 10 Weather Forecast, Seattle";

// Or, if written as a single-line, the solution could instead be written as:
// document.getElementById('weather-head').innerText = "February 10 Weather Forecast, Seattle";


// 2. Change the styling of every element with class "sun" to set the color to "orange"
const sunStyling = document.getElementsByClassName('sun');
for (const styling of sunStyling) {
    styling.style.color = 'orange';
}


// 3. Change the class of the second <li> from "sun" to "cloudy"
document.getElementsByTagName('li')[1].className = "cloudy";            // I like the simple elegance of the single-line method

// Written out using multiple lines of code, that is the same as:
    //  const changeLi = document.getElementsByTagName('li')[1];
    //  changeLi.className = "cloudy" 
