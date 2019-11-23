// Variables for your guesses, wins, losses, guesses left
var yourGuessesText = document.getElementById("yourGuessesdiv");
var winsText = document.getElementById("winsdiv");
var lossesText = document.getElementById("lossesdiv");
var guessesLeftText = document.getElementById("guessesLeftdiv");
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var theGuesses = [];
// array for letters 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// logs the computer guess as a function, then uses the function to choose a letter
function guessGame() { computerGuess = letters[Math.floor(Math.random() * letters.length)] }
guessGame()
console.log(computerGuess)
// starts the game on pressing a key 
document.onkeyup = function (event) {
        // logs your guess
        var yourGuess = event.key;
        console.log(yourGuess)
        // function to check if you used a letter already, then lists it if it's a new guess
        function checkGuess() {
                if (theGuesses.includes(yourGuess) === false) {
                        theGuesses.push(yourGuess);
                        guessesLeft--;
                        console.log(theGuesses)
                }
        }
        // compares the guesses, if not equal you lose a guess and it lists your guess, only if it's a new guess
        if (yourGuess !== computerGuess) {
                checkGuess();
        }
        //  if they're equal you win and start over
        if (yourGuess === computerGuess) {
                wins++;
                guessesLeft = 9;
                theGuesses = [];
                guessGame();
                console.log(computerGuess);
        }
        // if you run out of guesses you lose and start over
        if (guessesLeft === 0) {
                losses++;
                guessesLeft = 9;
                guessGame();
                theGuesses = [];
        }
        // Display the outcomes 
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        yourGuessesText.textContent = "Your guesses so far: " + theGuesses;
        guessesLeftText.textContent = "Guesses left: " + guessesLeft;
}