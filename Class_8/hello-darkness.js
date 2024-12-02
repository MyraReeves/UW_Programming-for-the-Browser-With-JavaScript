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
