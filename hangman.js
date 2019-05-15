// Create an array of words
var categories = [
        [“lion”, “butterfly”, “dog”, “cat”, “horse”, “frog”, “mosquito”, “tiger”, ” bird”],
        [“blue”, “red”, “yellow”, “red”, “purple”, “green”, “orange”, “white”, “black”, “pink”],
        [“audi”, “toyota”, “nissan”, “mercedes”, “Hyundai”, “audi”, “toyota”, “mercedes”, “Hyundai”, “telsa”, “ferrari”, “honda”]
    ]
var word = words[Math.floor(Math.random() * words.length)];

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {

var guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {

break;
} else if (guess.length !== 1) {
alert("Please enter a single letter.");
} else {

for (var j = 0; j < word.length; j++) {
  if (word[j] === guess) {
    answerArray[j] = guess; remainingLetters--;
  }
}
}
}


