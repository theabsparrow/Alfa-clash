
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

function getTheValue (valueId){
    const getTheValue = document.getElementById(valueId)
    const getTheValueText = getTheValue.innerText;
    const getTheValueNum = parseInt(getTheValueText);
    return getTheValueNum;
}
function setTheInnerText (elementId , value){
    const theElement = document.getElementById(elementId);
    theElement.innerText = value;
}

function userpressedkey (event){
    const pressedKey = event.key;
    const desireAlphabet = document.getElementById("desire-alphabet");
    const showingKey = desireAlphabet.innerText;
    const desireKey = showingKey.toLowerCase()
    if(pressedKey === desireKey){
        contineuTheGame()
        removeColorOfAlphabet(desireKey)
        const showScore = getTheValue("default-value")
        const theScore = showScore + 1;
        setTheInnerText("default-value" , theScore)   
    }
    else{
        const theLife = getTheValue("initial-life");
        const decreaseLife = theLife - 1;
        setTheInnerText("initial-life", decreaseLife)
      if(decreaseLife < 0){
        gameOver()
      }
    }
}
document.addEventListener ("keyup" , userpressedkey)

function playGroundHide (elementId) {
    const playGround = document.getElementById(elementId);
    playGround.classList.add("hidden")
}

function endGame (elementId) {
    const playGround = document.getElementById(elementId);
    playGround.classList.remove("hidden")
}

function gameOver (){
    endGame("end-game")
    playGroundHide("play-ground")
     const finalScore = getTheValue("default-value")
     setTheInnerText("final-score" , finalScore)

}

function playGame (){
    startTheGame()
    playGround()
    setTheInnerText("default-value" , 0)
    setTheInnerText("initial-life", 6)
    contineuTheGame()
    playGroundHide("end-game")
}