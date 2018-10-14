var winScore = 0
var lossScore = 0
var guessLeft = 9
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var letterIndex;
var letterGenerator;

function winFunction() {
    return document.getElementById("wins").innerHTML = winScore
}

function loseFunction() {
    return document.getElementById("lose").innerHTML = lossScore
}

function guessLeftFunction() {
    return document.getElementById("left").innerHTML = guessLeft
}

function resetGame() {
	document.getElementById("guess").innerHTML = ""
	guessLeft = 9;
	guessLeftFunction()
    letterIndex = Math.floor(Math.random() * letter.length);
    letterGenerator = letter[letterIndex]
}

winFunction()
loseFunction()
resetGame()

document.onkeyup = function(event) {
    var userChoice = event.key.toLowerCase();

    if (userChoice === letterGenerator) {
        winScore++
        winFunction()
        resetGame()
    } else {
        guessLeft--
        guessLeftFunction()
        document.getElementById("guess").innerHTML += (userChoice + ", ")

        if (guessLeft === 0) {
        	lossScore++
        	loseFunction()
        	resetGame()
        }
    }
}