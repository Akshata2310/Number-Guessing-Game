const msg1 = document.getElementById("message1");
const msg2 = document.getElementById("message2");
const msg3 = document.getElementById("message3");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");

const answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
const guessed_nos = [];

function play(){
    let user_guess = Number(guessInput.value);
    
    if(user_guess < 1 || user_guess > 100 || isNaN(user_guess)){
        alert("Please enter a valid number between 1-100");
        return; 
    }

    no_of_guesses++;
    guessed_nos.push(user_guess);

    msg1.textContent = "No. of Guesses: " + no_of_guesses;
    msg2.textContent = "Guessed numbers are: " + guessed_nos;

    if(user_guess < answer){
        msg3.textContent = "Your guess is too low!";
        msg3.style.color = "#ff4d4d"; 
    } 
    else if(user_guess > answer){
        msg3.textContent = "Your guess is too high!";
        msg3.style.color = "#ff4d4d";
    } 
    else if(user_guess === answer){
        msg3.textContent = "🎉 Congratulations! You guessed it right!!";
        msg3.style.color = "#2ed573"; 
        guessButton.disabled = true; 
    }

    guessInput.value = "";
    guessInput.focus();
}


guessButton.addEventListener("click", play);

guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        play();
    }
});