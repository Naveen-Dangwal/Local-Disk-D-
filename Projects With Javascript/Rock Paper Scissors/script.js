let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore1=document.querySelector("#user-score");
const compScore1=document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    let ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw Play Again !!";
    msg.style.backgroundColor="darkblue";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        userScore1.innerText=userScore;
        msg.innerText=`You Wins ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="Green";
    }
    else{
        compScore++;
        compScore1.innerText=compScore;
        msg.innerText=`You Lose ! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
    }

};

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else{
          let userWin=true;
          if(userChoice==="rock")
           {
            userWin=compChoice==="paper"?false:true;
           }
          else if(userChoice==="paper")
            {
                userWin=compChoice==="scissors" ?  false:true;
            }
            else{
                userWin=compChoice==="rock"?false:true;
                    
            }
            showWinner(userWin,userChoice,compChoice);
        }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
});