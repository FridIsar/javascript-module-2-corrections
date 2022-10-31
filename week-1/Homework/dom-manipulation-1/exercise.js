/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 */
    let a = document.querySelectorAll("p");
    console.log(a);
    // 2. the first div element node
    // --> should log the ".site-header" node
    let b = document.querySelector("div");
    console.log(b);
    // 3. the element with id "jumbotron-text"
    //--> should log the "#jumbotron-text" node
    let c = document.querySelector("#jumbotron-text");
    console.log(c);
    // 4. all the "p" elements of contained inside  the .primary-content element node
    // --> should log a list of nodes with a length of 3
    let d = document.querySelectorAll(".primary-content p");
    console.log(d);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertBtn = document.querySelector("#alertBtn");
let alertEvent = alertBtn.addEventListener("click", alertMsg);
function alertMsg(){
    alert ("Thanks for visiting Bikes for Refugees!")
};

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeClr = document.querySelector("#bgrChangeBtn");
let clrEvent = changeClr.addEventListener("click", change)
function change(){
    document.querySelector("body").style.backgroundColor = "green"
};

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
let text = document.querySelector("#addTextBtn");
let learnMore = document.querySelector(".heading-underline");
let addParagraph = document.createElement("p");
learnMore.appendChild(addParagraph)
let textEvent = text.addEventListener("click", addParagraph);

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largerBtn = document.querySelector("#largerLinksBtn");
let largerEvent = largerBtn.addEventListener("click", bigBig);
function bigBig(){
    let allLinks = document.querySelectorAll("a");
    [...allLinks].forEach(element => {
        element.style.fontSize = "x-large"
    });
};

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
let addBtn = document.addEventListener("click", getValue);
function getValue(){
    let getText = document.querySelector(".form-control").value;
    let createP = document.createElement("p");
    document.querySelector(".article").appendChild(createP);
    createP.innerText = getText;
    document.querySelector(".form-control").value = " "
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const colors = ["red", "blue", "yellow", "gray"];
let changeClr2 = document.querySelector("#bgrChangeBtn");
let clrEvent2 = changeClr.addEventListener("click", change2);
let index = 0
function change2(){
    document.querySelector("body").style.backgroundColor = colors[index]
    if(index == 4) {
        index = 0;
    } else {
    index++;
    };

}