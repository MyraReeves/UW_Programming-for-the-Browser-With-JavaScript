/*Using setInterval:
1. Every half a second, darken the body backgroundColor by 1
2. Stop (clear interval) when you get to zero .

Starting <body> background-color:       element.style.backgroundColor = 'rgb(255, 255, 255)';
After 0.5 second, background-color:     element.style.backgroundColor = 'rgb(254, 254, 254)';
*/

const body = document.getElementsByTagName('body')[0];
let red = 255;
let green = 255;
let blue = 255;


let darkenScreen = setInterval( () => {
    red --;
    green --;
    blue --;    
    
    if (red === 0){                             // Since they all have the same value, only one needs targeting to stop the darkening
        clearInterval(darkenScreen);
    }
    
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    }, 500);
