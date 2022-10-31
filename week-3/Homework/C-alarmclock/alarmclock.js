function setAlarm() {
  const getValue = document.querySelector("input");
  var setValue = 0;
  setValue = getValue.value;
  const timeRem = document.getElementById("timeRemaining");
  timeRem.innerHTML = setValue;

  setInterval(function () {
    if (setValue != 0) {
      timeRem.innerHTML = setValue--;
    }
  }, 1000);
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
