const preload = document.querySelector("#preload");
const playNow = document.querySelector("#playNow");
const exactGame = document.querySelector("#exactGame");
const gameCard = document.querySelector(".game-card");
const gameShell = document.querySelector(".game-shell");
const commentsButton = document.querySelector("#commentsButton");
const fullscreenButton = document.querySelector("#fullscreenButton");
const theaterButton = document.querySelector("#theaterButton");

const REAL_GAME_URL = "exact-app.html";

function focusGame() {
  exactGame.focus();
  exactGame.contentWindow?.focus();
}

function loadGame() {
  if (!exactGame.src) {
    exactGame.src = REAL_GAME_URL;
  }

  preload.classList.add("is-hidden");
  window.setTimeout(focusGame, 120);
}

playNow.addEventListener("click", () => {
  loadGame();
});

gameShell.addEventListener("pointerdown", () => {
  if (preload.classList.contains("is-hidden")) {
    focusGame();
  }
});

commentsButton.addEventListener("click", () => {
  document.querySelector(".text-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

theaterButton.addEventListener("click", () => {
  gameCard.classList.toggle("is-theater");
  focusGame();
});

fullscreenButton.addEventListener("click", async () => {
  loadGame();

  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      return;
    }

    const request =
      gameCard.requestFullscreen ||
      gameCard.webkitRequestFullscreen ||
      gameCard.msRequestFullscreen;

    await request.call(gameCard);
    focusGame();
  } catch {
    gameCard.classList.add("is-theater");
    focusGame();
  }
});
