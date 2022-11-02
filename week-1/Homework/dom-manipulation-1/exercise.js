/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6
    
    2. the first div element node
    --> should log the ".site-header" node
    
    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
    
    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
    
    */
   
 const pNodes = document.querySelectorAll("p");
   if(pNodes.length === 6){
      console.log(pNodes)
   }

 const firstDiv = document.querySelector(".site-header");
 console.log(firstDiv);

 const jumboText = document.querySelector("#jumbotron-text")
 console.log(jumboText);

 const primaryElements = document.querySelectorAll(".primary-content p")
 console.log(primaryElements)

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const myButton = document.querySelector("#alertBtn")
myButton.addEventListener("click", alertBell);
function alertBell(){
    alert("Thanks for visiting Bikes for Refugees!")
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

// Colors array
let colors = ["red","blue","green","grey","orange","white"]

//get Button

const colorButton = document.querySelector("#bgrChangeBtn")

//adding Event Listner

colorButton.addEventListener("click", (e) =>{
 // adding randomizer
 const randomColors = colors[Math.floor(Math.random() * colors.length)]

//get the body
const Wholebody = document.querySelector("body")

Wholebody.style.backgroundColor = randomColors;

})

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

//get button
const textButton = document.querySelector("#addTextBtn");

//adding event listner
textButton.addEventListener("click", (e) => {
    e.preventDefault()

    //selecting the below learn more div

    const paraText = document.querySelector("#mainArticles");
    //creating Elements
    const addingPara = document.createElement("p");
    //adding text inside
    addingPara.innerText = "LEARN MORE"
    //appending chind
    paraText.appendChild(addingPara);
})



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
 
//get button
const largerLinkButton = document.querySelector("#largerLinksBtn");

// adding eventlistner

largerLinkButton.addEventListener("click", () => {

    const allLinks = document.querySelectorAll("a");
    //adding for loop
    for(let i = 0; i < allLinks.length; i++){
        allLinks[i].style.fontSize = "larger";
    }
})
/*
Task 6
======
Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
    //get button
    const addbutton = document.querySelector("#addArticleBtn")
    //adding evenListner
     addbutton.addEventListener("click", () => {
        //creating P element
      const userPar= document.createElement("p"); 
      //selecting input feild
      const parNew = document.querySelector(".form-control").value;  
      //assingning input feild text to P elements
      userPar.innerHTML = parNew;
      // That's where we want to drop the paragraph 
      const area = document.querySelector("#mainArticles");
      //Appending Child
      area.appendChild(userPar);
     }) // TODO the text input field is not being cleared
/*
Task 7
======
Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

 //get Button

 const newColorButton = document.querySelector("#bgrChangeBtn")
 let i = 0

 //adding Event Listner

 newColorButton.addEventListener("click", (e) =>{
    const newColors = ["red", "pink", "blue", "green", "orange"];
    i= i < newColors.length ? ++i : 0
    document.body.style.background = newColors[i];
    })
     