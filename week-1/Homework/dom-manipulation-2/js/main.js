// Part 1

//Blue button.
let blueBtn = document.querySelector("#blueBtn").addEventListener("click", changeBlue);
function changeBlue(){
    document.querySelector(".Jumbotron").style.backgroundColor = "#588fbd";
    document.querySelector("#donate").style.backgroundColor = "#ffa500";
    document.querySelector("#vol").style.backgroundColor = "black";
    document.querySelector("#vol").style.color = "white"
};

//Orange button
let orangeBtn = document.querySelector("#orangeBtn").addEventListener("click", changeOrange);
function changeOrange(){
    document.querySelector(".Jumbotron").style.backgroundColor = "#f0ad4e";
    document.querySelector("#donate").style.backgroundColor = "#5751fd";
    document.querySelector("#vol").style.backgroundColor = "#31b0d5";
    document.querySelector("#vol").style.color = "white"
};

//Green button
let greenBtn = document.querySelector("#greenBtn").addEventListener("click", changeGreen);
function changeGreen(){
    document.querySelector(".Jumbotron").style.backgroundColor = "#87ca8a";
    document.querySelector("#donate").style.backgroundColor = "black";
    document.querySelector("#vol").style.backgroundColor = "#8c9c08";
   
};

//Part 2

let submitButton = document.querySelector("form button").addEventListener("click", formSubmit);

function formSubmit(){
    event.preventDefault()
    let emailInput = document.querySelector("#exampleInputEmail1");
    let nameInput = document.querySelector("#example-text-input");
    let textInput = document.querySelector("#exampleTextarea");

    if (emailInput.value.length == 0 || emailInput.value.includes("@") == false){
        alert("Email is not Valid");
        document.querySelector("#exampleInputEmail1").style.backgroundColor = "red"; 
    }if(nameInput.value.length == 0){
        alert("Name is Empty");
        document.querySelector("#example-text-input").style.backgroundColor = "red";
    } if (textInput.value.length == 0){
        alert("Text is Empty")
        document.querySelector("#exampleTextarea").style.backgroundColor = "red"
    }else{
        alert ("thank you for filling out the form");
        emailInput.value="";
        nameInput.value="";
        textInput.value="";
    }
        
    
}