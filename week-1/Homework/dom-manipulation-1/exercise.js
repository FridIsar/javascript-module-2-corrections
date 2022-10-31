/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6 */
const allParagraph= document.querySelectorAll("p");
if(allParagraph.length===6){
    console.log(allParagraph);
}

 /*   2. the first div element node
    --> should log the ".site-header" node*/
    const firstDiv= document.querySelector(".site-header");
console.log(firstDiv);

   /* 3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node*/
    const JumText =document.querySelector("#jumbotron-text");
    console.log(JumText);
   /* 4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3
    */
    const paraText =document.querySelector(".primary-content p");
    console.log(paraText);
    // TODO THIS ONLY RETURNS THE FIRST ELEMENT (NOT 3)
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text 
"Thanks for visiting Bikes for Refugees!"
*/
const alertButton=document.querySelector("#alertBtn");
alertButton.addEventListener("click", alertDo);

function alertDo() {
  alert("Thanks for visiting Bikes for Refugees");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour'
 button is clicked.
*/
/*const alertBtn=document.querySelector("#bgrChangeBtn");

alertBtn.addEventListener("click", function() {
    const curColour = document.body.style.backgroundColor;

    if (curColour === 'white') {
        document.body.style.backgroundColor = "#00FFFF";
    }
    else {
        document.body.style.backgroundColor = "white";
    }
});*/

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added
 inside the section that says “LEARN MORE”
*/

const AddText=document.querySelector("#addTextBtn");
AddText.addEventListener("click", function(){
    const ArticleText=document.querySelector("#mainArticles");  
    const paraElement=document.createElement("paragraph");
    paraElement.innerText = "LEARN MORE"; 
    ArticleText.appendChild(paraElement);
    console.log(paraElement);
 

}
);
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const LargeTextBtn=document.querySelector("#largerLinksBtn");
LargeTextBtn.addEventListener("click", function(){
const alink=document.querySelectorAll("a");
for(i=0;i<alink.length;i++)
alink[i].style.fontSize = "x-large";

}
)
/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in 
the "LEARN MORE" section. Also clear the text inside the input field
*/
const Add=document.querySelector("#addArticleBtn");
Add.addEventListener("click", function(){
    const pElement=document.createElement("para");
    const ArticleTxt=document.querySelector(".form-control").value;  
pElement.innerText =ArticleTxt ; 
    const main = document.querySelector("#mainArticles");
    main.appendChild(pElement);
 

}
);
// TODO THE TEXT IS NOT BEING CLEARED

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
 
 // TODO this changes the body to all colors at once. We want to cycle through the colors of the array (first click: red, second: blue...)
 // HINT use a global variable colorNumber to know at which color you are. Then access the current color with colorArray[colorNumber]
 // var colorNumber = 0
const alertBtn1=document.querySelector("#bgrChangeBtn");

alertBtn1.addEventListener("click", function() {
    let colorArray =["red","blue","green","grey","orange","white"]

    colorArray.forEach(function(item){
     
         const fullbody = document.querySelector("body")
         console.log(item)
             
        fullbody.style.backgroundColor = item;
})
})