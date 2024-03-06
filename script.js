
function startTheGame () {
    const startGame = document.getElementById("start-game");
    startGame.classList.add("hidden")
}

function playGround () {
    const playGround = document.getElementById("play-ground");
    playGround.classList.remove("hidden")
}
function setColorOfAlphabet (alphabetId){
const theAlphabet = document.getElementById(alphabetId);
theAlphabet.classList.add("bg-[#FFA500]");
}

function contineuTheGame () {
    const alphabetCollection = "abcdefghijklmnopqrstuvwxyz"
    const alphabetString = alphabetCollection.split("")
    const randNum = Math.random() * 25;
    const intgerRandNum = Math.round(randNum);
    const alphabet = alphabetString[intgerRandNum];
   const desireAlphabet = document.getElementById("desire-alphabet");
   desireAlphabet.innerText = alphabet;
   setColorOfAlphabet(alphabet)
}


function playGame (){
    startTheGame()
    playGround()
    contineuTheGame()
}