const msg1=document.getElementById("message1");
const msg2=document.getElementById("message2");
const msg3=document.getElementById("message3");

const guessInput=document.getElementById("guessInput");
const guessButton=document.getElementById("guessButton");

const answer=Math.floor(Math.random()*100)+1;
let attempts=0;
const guesses=[];

function play(){

    let guess=Number(guessInput.value);

    if(guess<1||guess>100||isNaN(guess)){
        alert("Please enter a number between 1 and 100");
        return;
    }

    attempts++;
    guesses.push(guess);
    msg1.textContent=attempts;
    msg2.innerHTML="";

    guesses.forEach(num=>{
        msg2.innerHTML+=`
        <span class="guess">
            ${num}
        </span>
        `;
    });

    if(guess<answer){
        msg3.className="error";
        msg3.innerHTML="📉 Too Low!";
    }

    else if(guess>answer){
        msg3.className="error";
        msg3.innerHTML="📈 Too High!";
    }

    else{
        msg3.className="success";
        msg3.innerHTML=`🎉 Congratulations! You guessed it in ${attempts} attempts.`;
        guessButton.disabled=true;
        guessInput.disabled=true;
    }
    
    if(attempts==16){
        alert("The number of attempts has exceeded 15. Reload to play again.")
        guessButton.disabled=true;
        guessInput.disabled=true;
    }

    guessInput.value="";
    guessInput.focus();

}

guessButton.addEventListener("click",play);
guessInput.addEventListener("keydown",e=>{
    if(e.key==="Enter"){
        play();
    }
});

guessInput.focus();