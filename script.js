let opp='';
let playerScore=0;
let compScore=0;

const stone=document.createElement("button");
const paper=document.createElement("button");
const scissor=document.createElement("button");
const resultt=document.createElement("div");
document.body.appendChild(stone);
document.body.appendChild(paper);
document.body.appendChild(scissor);
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
    function playRound(playerChoice){
        opp = getCompChoice();
        const compChoice=document.createElement("p");
         compChoice.textContent=`The opponent chose ${opp}`
         resultt.appendChild(compChoice);
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
if(roundsPlayed>5){
    const finalResult=playerScore>compScore?'CONGRATS U WON':'LOL U LOST';
    resultt.textContent=`GAME OVER!!!  ${finalResult} Your score-${playerScore},Opponent's score-${compScore}`
    return;
}
    }

    

    


