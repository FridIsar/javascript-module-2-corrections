const blueButton = document.querySelector("#blueBtn");

blueButton.addEventListener("click", function () {
  let myElement = document.querySelector(".jumbotron");
  myElement.style.backgroundColor = "#588fbd";

  const donateBike = document.querySelector("#content .btn-primary");
  donateBike.style.backgroundColor = "#ffa500";
  const volunteer = document.querySelector(".btn-secondary");

  volunteer.style.backgroundColor = "black";
  volunteer.style.color = "white";
});
const orangeButton = document.querySelector("#orangeBtn");

orangeButton.addEventListener("click", function () {
  let myElement = document.querySelector(".jumbotron");
  myElement.style.backgroundColor = "#f0ad4e";

  const donateBike = document.querySelector("#content .btn-primary");
  donateBike.style.backgroundColor = "#5751fd";
  const volunteer = document.querySelector(".btn-secondary");
  volunteer.style.backgroundColor = "#31b0d5";
  volunteer.style.color = "white";
});

const greenButton = document.querySelector("#greenBtn");

greenButton.addEventListener("click", function () {
  let myElement = document.querySelector(".jumbotron");
  myElement.style.backgroundColor = "#87ca8a";

  const donateBike = document.querySelector("#content .btn-primary");
  donateBike.style.backgroundColor = "black";
  const volunteer = document.querySelector(".btn-secondary");
  volunteer.style.backgroundColor = "#8c9c08";
});

const formSubmit = document.getElementsByClassName("btn-primary submit")[0];

formSubmit.addEventListener("click", function (event) {
  let hasFormError = false;
  const email = document.getElementById("exampleInputEmail1");
  const name = document.getElementById("example-text-input");
  const textArea = document.getElementById("exampleTextarea");
  debugger;
  email.style.backgroundColor = "";
  name.style.backgroundColor = "";
  textArea.style.backgroundColor = "";
  formSubmit.style.backgroundColor = "";

  const emailCheck = email.value;
  const nameCheck = name.value;
  const textAreaCheck = textArea.value;

  if (emailCheck.length == "" || !emailCheck.includes("@")) {
    email.style.backgroundColor = "red";
    hasFormError = true;
  }
  if (nameCheck == "") {
    name.style.backgroundColor = "red";
    hasFormError = true;
  }
  if (textAreaCheck == "") {
    textArea.style.backgroundColor = "red";
    hasFormError = true;
  }
  if (hasFormError) {
    event.preventDefault(); // this line prevent the form to be submited when there is an error
    formSubmit.style.backgroundColor = "red";
  }
  alert("your form submitted successfully");
  // TODO you also want to prevent default when the form has no error (to avoid the page from reloading).Then you should make the form inputs empty.
});
