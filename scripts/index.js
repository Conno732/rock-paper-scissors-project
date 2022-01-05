let acceptIn = false;
let score = [0, 0];
game();

let scoreboard = document.getElementById("score");
let actionText = document.getElementById("actionText");

function computerPlay() {
  let choice = Math.floor(Math.random() * 10) % 3;
  switch (choice) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    default:
      return "Scissors";
  }
}

function computeTurn(player, computer) {
  let PR = "Paper beats rock, ";
  let SP = "Scissors beats paper, ";
  let RS = "Rock beats scissors, ";
  let CW = "computer wins.";
  let PW = "player wins.";

  let res = "";
  let score = 0;

  if (player === computer) {
    res = "Both players played " + player + ", it is a tie.";
    score--;
  }
  if (player === "Rock") {
    if (computer === "Scissors") {
      res = RS + PW;
      score++;
    }
    if (computer === "Paper") {
      res = PR + CW;
    }
  }

  if (player === "Paper") {
    if (computer === "Rock") {
      res = PR + PW;
      score++;
    }
    if (computer === "Scissors") {
      res = SP + CW;
    }
  }

  if (player === "Scissors") {
    if (computer === "Rock") {
      res = RS + CW;
    }
    if (computer === "Paper") {
      res = SP + PW;
      score++;
    }
  }
  return [res, score];
}

function game() {
  const page = document.getElementById("page");
  page.addEventListener("click", sendUserInput);
  acceptIn = true;
}

function sendUserInput(element) {
  let el = element.target.parentElement.id;
  if (!["Reset", "Rock", "Paper", "Scissors"].includes(el)) return;
  let compIn = computerPlay();
  if (el === "Reset") {
    resetGame();
    return;
  } else if (acceptIn) {
    updatePic(compIn.toLowerCase(), 1, "computer");
    updatePic(el.toLowerCase(), 1, "player");
    let outcome = computeTurn(el, compIn);
    actionText.innerText = outcome[0];
    if (outcome[1] === 1) score[0] += 1;
    else if (outcome[1] === 0) score[1] += 1;
    updateScoreBoard(score[0], score[1]);
  }

  if (score[0] >= 5 || score[1] >= 5) {
    actionText.innerText = score[0] >= 5 ? "Player wins!" : "Computer wins!";
    acceptIn = false;
  }
}

function resetGame() {
  score[0] = 0;
  score[1] = 0;
  updateScoreBoard(score[0], score[1]);
  acceptIn = true;
  actionText.innerText = "Choose your attack.";
  updatePic("", 0, "player");
  updatePic("", 0, "computer");
}

function updateScoreBoard(player, comp) {
  scoreboard.innerText = `${player} - ${comp}`;
}

function updatePic(choice, visibility, which) {
  let pic = document.getElementById(which + "Pic");
  if (choice !== "") pic.src = "./imgs/" + choice + ".png";
  if (visibility) {
    pic.style.visibility = "visible";
  } else {
    pic.style.visibility = "hidden";
  }
}
