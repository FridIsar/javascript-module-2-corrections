//Part 1
//Blue 
//get button
const blueButton = document.querySelector("#bluebtn")

// Adding evenListener

blueButton.addEventListener("click", (e) =>{
    //selecting elements
    const jumbo = document.querySelector(".jumbotron");
    const donateABike = document.querySelector(".btn-primary");
    const volunteer = document.querySelector(".btn-secondary");
    //style
    jumbo.style.backgroundColor = "#588fbd";
    donateABike.style.backgroundColor = "#ffa500";
    volunteer.style.backgroundColor = "black"
    volunteer.style.color = "white"
    

} )
 
//Orange
//get button
const orangeButton = document.querySelector("#orangeBtn")

// Adding evenListener

orangeButton.addEventListener("click", (e) =>{
    //selecting elements
    const jumbo = document.querySelector(".jumbotron");
    const donateABike = document.querySelector(".btn-primary");
    const volunteer = document.querySelector(".btn-secondary");
    //style
    jumbo.style.backgroundColor = `#f0ad4e`
    donateABike.style.backgroundColor = `#5751fd`
    volunteer.style.backgroundColor = `#31b0d5`
    volunteer.style.color = `white`
})

//green

const greenButton = document.querySelector("#greenBtn")

// Adding evenListener

greenButton.addEventListener("click", (e) =>{
    //selecting elements
    const jumbo = document.querySelector(".jumbotron");
    const donateABike = document.querySelector(".btn-primary");
    const volunteer = document.querySelector(".btn-secondary");
    //style
    jumbo.style.backgroundColor = `#87ca8a`
    donateABike.style.backgroundColor = `black`
    volunteer.style.backgroundColor = `#8c9c08`
})

//Part 2

//Selecting all the feilds first
const form = document.querySelector("form")
const email = document.querySelector("#exampleInputEmail1");
const describeYouself = document.querySelector("#exampleTextarea");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    checkInputs();
    checkUsername();
    describing();
})

function checkInputs(){
    const emailValue = email.value.trim();
    const symbolCheckInEmail = emailValue.includes("@")
    
    if(emailValue === "" || !symbolCheckInEmail){
        //show error
        setErrorFor(email, "Email cannot be blanked")
        email.style.backgroundColor  = "red"
        console.log(emailValue)
        
        
    }else{
        //add success
        setSuccess(email);
        console.log("Test")
        email.style.backgroundColor = "green"
    }
}

function setErrorFor(someinput,message){
    const formControl = someinput.parentElement;
    const small = document.querySelector("small")
    
    small.innerText = message;
    
    //adding classes
    formControl.className = "form-control error"
    }
    
    function setSuccess(someinput){
        const formControl = someinput.parentElement;
        formControl.className = "form-control success"
    }
    
    //===============================================================================================
    
    //Adding second function for username
    function checkUsername(){
        const username = document.querySelector("#example-text-input");
        const usernameValue = username.value.trim();
        
        if(usernameValue === ""){
            //show error
            setError(username, "Username cannot be blanked")
            username.style.backgroundColor  = "red"
            
        }else{
            //add success
            setSuccessFor(username);
            console.log("second test")
           username.style.backgroundColor = "green"
        }
    }
    
    function setError(someinput,message){
        const formControl = someinput.parentElement;
        const small = document.querySelector("small")
        
        small.innerText = message;
        
        //adding classes
        formControl.className = "form-control error"
    }
    
    function setSuccessFor(someinput){
        const formControl = someinput.parentElement;
        formControl.className = "form-control success"
    }
  
  //===============================================================================================
  
  //Adding third function for describeYourself
  function describing(){
      const describeValue = describeYouself.value.trim();
      
      
      if(describeValue === ""){
          //show error
        setError(describeYouself, "describe Yourself cannot be blanked")
        describeYouself.style.backgroundColor  = "red"
        
    }else{
        //add success
        setSuccessFor(describeYouself);
        console.log("third success test")
        describeYouself.style.backgroundColor = "green"
  }
}
  
function setError(someinput,message){
    const formControl = someinput.parentElement;
      const small = document.querySelector("small")
  
      small.innerText = message;
  
      //adding classes
      formControl.className = "form-control error"
  }
  
  function setSuccessFor(someinput){
      const formControl = someinput.parentElement;
      formControl.className = "form-control success"
  }