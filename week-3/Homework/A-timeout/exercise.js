/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const body =  document.querySelector("body");
const colorsArray = ["red","blue","green","grey","orange","pink"]
console.log(colorsArray.length);

const changingColors = function colors(){
    const randomColors = colorsArray[Math.floor(Math.random() * colorsArray.length)]
    console.log(randomColors)
    body.style.backgroundColor = randomColors
}
// adding event listener
setTimeout(changingColors,5000);
setInterval(changingColors,5000);

