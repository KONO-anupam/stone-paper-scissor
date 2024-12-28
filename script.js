let opp='';
let playerScore=0;
let compScore=0;

const stone=document.createElement("button");
stone.textContent='stone';
const paper=document.createElement("button");
paper.textContent='paper';
const scissor=document.createElement("button");
scissor.textContent='scissor';
const resultt=document.createElement("div");
let roundsInfo=document.createElement('p');
const compChoice=document.createElement("p");
const reset=document.createElement("button");
reset.textContent="PLAY AGAIN"
   document.body.appendChild(roundsInfo);
document.body.appendChild(stone);
document.body.appendChild(paper);
document.body.appendChild(scissor);

document.body.appendChild(compChoice);

document.body.appendChild(resultt);




stone.addEventListener("click",()=>{playRound("stone")})
paper.addEventListener("click",()=>{playRound("paper")})
scissor.addEventListener("click",()=>{playRound("scissor")})

    function getCompChoice(){
        let cc=Math.random();
        if(cc<=0.33){
            return'stone';
          
     }
     if(cc>0.33 && cc<=0.66){
           return'paper';
     }
     if(cc>0.66){
            return'scissor';
     } 
    }
   let roundsPlayed=0;
   document.body.appendChild(compChoice);
    function playRound(playerChoice){
        opp = getCompChoice();
         compChoice.textContent=`The opponent chose ${opp}`
         if(opp==='paper'&& playerChoice==='scissor'){
            resultt.textContent= 'u win';
            playerScore++;

         }
         else if(opp==='scissor'&& playerChoice==='stone'){
            resultt.textContent= 'u win';
            playerScore++;
         }
         else if(opp==='stone'&& playerChoice==='paper'){
            resultt.textContent= 'u win';
            playerScore++;
         }
        else if(opp==='stone'&& playerChoice==='stone'){
            resultt.textContent = 'tie';
        }
        else if(opp==='paper'&& playerChoice==='paper'){
            resultt.textContent= 'tie';
        }
        else if(opp==='scissor'&& playerChoice==='scissor'){
            resultt.textContent= 'tie';
        }
        else{
            resultt.textContent= 'u lose';
            compScore++;
        }
     
roundsPlayed++;
roundsInfo.textContent=`Round:${roundsPlayed} out of 5`;
if(roundsPlayed>=5){
    const finalResult=playerScore>compScore?'CONGRATS U WON':'LOL U LOST';
    resultt.textContent=`GAME OVER!!!  ${finalResult} Your score-${playerScore},Opponent's score-${compScore}`
    stone.disabled=true;
    paper.disabled=true;
    scissor.disabled=true;
    document.body.appendChild(reset)
    reset.onclick=()=>{
        playerScore=0;
        compScore=0;
        roundsPlayed=0
        compChoice.textContent='';
        resultt.textContent='';
        stone.disabled=false;
        paper.disabled=false;
        scissor.disabled=false;
    }
    return;
}


    }

    

    


