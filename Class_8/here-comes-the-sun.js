/*Using requestAnimationFrame:
animate the background-color of the body so that it changes from black rgb(0, 0, 0) to white rgb(255, 255, 255).
It should increment by 1 every frame.
Once the background-color is rgb(255, 255, 255), it should not call requestAnimationFrame again.
It should take approximately 4-5 seconds for the background to animate from black to white.
*/

const body = document.getElementsByTagName('body')[0];
let colorValue = 0;
const duration = 4000;

const lightenBackground = function() {
    colorValue ++;
    if(colorValue < 256){
        document.body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
        requestAnimationFrame(lightenBackground);
    }
}

requestAnimationFrame(lightenBackground)