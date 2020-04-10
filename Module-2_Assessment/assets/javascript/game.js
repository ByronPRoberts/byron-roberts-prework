alert("You are playing Byron's Word Guess Game!");


var $placeholders = document.getElementById("placeholders");
var $guessedLetters = document.getElementById("guessed-letters");
var $guessesLeft = document.getElementById("guesses-left");
var $wins = document.getElementById("wins");
var $losses = document.getElementById("losses");
var $newGameButton = document.getElementById("newGameButton");

var wordsArray = [
  "rhino",
  "spiderman",
  "balloon",
  "flapjack",
  "wednesday",
  "oboe",
  "comanche",
  "myanmar",
  "granite",
]

var gameOn = false;
var wins = 0;
var losses = 0;
var guessesLeft = 15;
var pickedWord = "";
var pickedWordPlaceholderArray = [];
var guessedLetterArray = [];
var wrongLetterArray = [];

var newGame = function(){

 gameOn = true;
//  wins = 0;
//  losses = 0;
 guessesLeft = 15;
 pickedWord = "";
 pickedWordPlaceholderArray = [];
 guessedLetterArray = [];
 wrongLetterArray = [];



  console.log("New Game!")
  

  pickedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

  for (var i = 0; i < pickedWord.length; i++) {
    pickedWordPlaceholderArray.push("_");
  }
   
  $guessesLeft.textContent = guessesLeft;
  $placeholders.textContent = pickedWordPlaceholderArray.join(" ");
  $guessedLetters.textContent = wrongLetterArray.join(" ");



// var text= document.getElementsById(newGameButton);
// text.onclick = function(){
//   console.log("Hey Hey Hey")
// }
}

function letterGuess(letter) {
  console.log(letter);

  if (gameOn && guessedLetterArray.indexOf(letter) === -1){
    guessedLetterArray.push(letter);
    
    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
        pickedWordPlaceholderArray[i] = pickedWord[i];
        // $placeholders.textContent = pickedWordPlaceholderArray.join(" ");
      }
      // $placeholders.textContent = pickedWokrdPlaceholderArray.join("");
    }
    $placeholders.textContent = pickedWordPlaceholderArray.join(" ");
    incorrectCheck(letter);
    winCheck();
    
  }
 

  else if (!gameOn) {
    alert("Click New Game!");
  } else {
    alert("You've already guessed that letter!")
  }
}

function incorrectCheck(letter) {
  if(pickedWordPlaceholderArray.indexOf(letter.toLowerCase())=== -1){
    guessesLeft--;
    wrongLetterArray.push(letter);
    $guessedLetters.textContent = wrongLetterArray.join(" ");
    $guessesLeft.textContent = guessesLeft; 
  }
  lossCheck();
}

function lossCheck() {
  if(guessesLeft === 0){
    losses++;
    gameOn = false;
    $losses.innerHTML = losses;
    console.log("You Lose");
    newGame()

  }
  // winCheck();
}

function winCheck() {
  if(pickedWord === pickedWordPlaceholderArray.join("")){
    wins++;
    gameOn = false;
    $wins.innerHTML = wins;
    console.log("You Win");
    newGame()

  }
}




document.onkeyup = function(event){
  if(event.keyCode >= 65 && event.keyCode <= 90) {
    letterGuess(event.key);
  }
}

newGameButton.addEventListener("click", newGame) 
  console.log("it worked")





// loop over the word for each letter of the word array
    // for (var i = 0; i < pickedWord.length; i++) {
    //   if (guessedLetters === pickedWord[i]) {
        
    //     guessedLetterArray.push(guessedLetters);
    //     answerBlanks[i] = guessedLetters;
    //     $("#userGuess").text(answerBlanks.join(" "));
    //     lettersLeft--;
    //     console.log(lettersLeft);
    //     console.log(pickedWord + " ----- " + answerBlanks)
    //     if (lettersLeft === 0) {
    //       console.log("you win");
    //       score++;
    //       var youWinDiv = document.createElement("div")
    //       youWinDiv.innerHTML = "You Win! Your score is ${score}. Press X to start again.";
    //       $("#userGuess").append(youWinDiv);
    //       return gameOn = true;
    //     }
    //   } else if (guessedLetters != pickedWord[i]) {
    //     // make a way to checks if the wrong letter is already in the guesses made array
    //     console.log("player guessed " + guessedLetters);
    //     console.log("word at that index " + pickedWord[i]);
  
    //     var filteredGuesses = pickedWord.filter( guess => guess === guessedLetters);
    //     console.log("filteredGuesses is " + filteredGuesses.length);
    //     if (filteredGuesses.length === 0) {
    //       console.log("life lost");
    //       guessesMade.push(guessedLetters);
    //       guessesLeft--;
    //     }
  
      
    

    

// var pickedWord = wordsArray[Math.floor(Math.random()* wordsArray.length)]
// //should match the number of blanks to be guessed to the length of the word

// for (var i=0; i < pickedWord.length; i++) {
//     answerBlanks[i] = "_";
// }
// var blanksRemaining = pickedWord.length;

// while(blanksRemaining > 0) {
//     //Game Code
//     alert(answerBlanks.join(" "));
//     // player input
//     var guess = prompt("Guess a letter.")
//     console.log(guess)
//     if(guess === null) {
//         break
//     }
//     else if (guess.length !== 1) {
//         alert("Please guess a single letter.")
//     }
//     else {
//         for(var t = 0; t < pickedWord.length; t++) {
//             if(pickedWord[t] === guess) {
//                 answerBlanks[t] = guess;
//                 blanksRemaining --;
//                 alert("Good guess!")
            
//             }

           
//         }
//     }
  


// //     //update array and show progress

// if (blanksRemaining === 0) {
//     alert("You Win!!!")