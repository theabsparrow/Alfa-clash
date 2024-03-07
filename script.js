
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

function removeColorOfAlphabet (alphabetId){
    const theAlphabet = document.getElementById(alphabetId);
    theAlphabet.classList.remove("bg-[#FFA500]");
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

function userpressedkey (event){
    const pressedKey = event.key;
    const desireAlphabet = document.getElementById("desire-alphabet");
    const showingKey = desireAlphabet.innerText;
    const desireKey = showingKey.toLowerCase()
    if(pressedKey === desireKey){
        contineuTheGame()
        removeColorOfAlphabet(desireKey)
        const defaultValue = document.getElementById("default-value")
        const defaultScore = defaultValue.innerText;
        const defaultScoreNum = parseInt(defaultScore);
        const setNewScore = defaultScoreNum + 1;
        defaultValue.innerText = setNewScore;
        
    }
    else{
       const initialLife = document.getElementById("initial-life");
       const initialLifeText = initialLife.innerText;
       const initialLifeNum = parseInt(initialLifeText);
       const reduceInitialLIfe = initialLifeNum - 1;
       initialLife.innerText = reduceInitialLIfe;
    }
}
document.addEventListener ("keyup" , userpressedkey)



function playGame (){
    startTheGame()
    playGround()
    contineuTheGame()
}