// variables
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// events
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", enterKeyPressed);

//functions
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen();

    if (xAttempts === 1) {
      screen2.querySelector("h2").innerText = `You got it in ${xAttempts} try`;
    } else {
      screen2.querySelector(
        "h2"
      ).innerText = `You got it in ${xAttempts} tries`;
    }
  }

  inputNumber.value = "";

  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function enterKeyPressed(e) {
  if (e.key === "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
