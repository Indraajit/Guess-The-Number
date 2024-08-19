let numberInput = document.querySelector(".container .gen-form #user-input");
const checkBtn = document.getElementById("resultbtn");
const result = document.getElementById("result");
const gamechance = document.getElementById("chance");

let chances = 3;

let savedNumber;

gamechance.innerHTML = `${chances} chance`;

savedNumber = generateRandomNumber(1, 100);

function restartGame() {
  savedNumber = generateRandomNumber(1, 100);
  chances = 3;
  gamechance.innerHTML = `${chances} chances`;
  numberInput.value = "";
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

checkBtn.addEventListener("click", () => {
  if (chances > 0) {
    if (Number.parseInt(numberInput.value) === savedNumber) {
      result.innerHTML = "You Won The Game";
      setTimeout(() => {
        restartGame();
        result.innerHTML = "Game Restarting";
      }, 1000);
    } else {
      chances -= 1;
      gamechance.innerHTML = `${chances} chance`;
      result.innerHTML = `Wrong ${chances} chance.Try Again`;
    }
  }

  if (chances === 0) {
    result.innerHTML = `The Generated Number is ${savedNumber}`;
    checkBtn.disabled = true;
    setTimeout(() => {
      restartGame();
      result.innerHTML = "Game Restarting";
    }, 1000);
  }

  setTimeout(() => {
    result.innerHTML = "";
  }, 1500);
});
