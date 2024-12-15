let humanScore=0;
let compScore=0;
function getcomputerchoice(){
    const cc=Math.random();
    if(cc<=0.33){
        return "rock";
    }
    if(cc>0.33 && cc<=0.66){
        return "paper";
    }
    if(cc>0.66){
        return "scissor";
    }
}

function gethumanchoice(){
    const hc=prompt("enter ur choice").toLowerCase();
    const ValidOption= ["rock","paper","scissor"];
    if(ValidOption.includes(hc)){
 console.log("ur choice is",hc);
 return hc;
    }
    else{
        console.log("invalid choice");
        return null; 
    }
}

function playRound(hc,cc){
 if(hc === cc){
    return "tie";
 }
 else if(hc === "rock" && cc==="scissor" ||
    hc === "scissor" && cc==="paper" ||
    hc === "paper" && cc==="rock" 
 ){
    return "win";
 }
 else{
    return "lose";
 }
    
}
 function playGame(){
    for(let i=1;i<=5;i++){
        console.log(`round ${i}:`)
       const hc = gethumanchoice();
       if(!hc){
        console.log("invalid choice");
        continue;
       }
    
const cc= getcomputerchoice();
console.log("computer choice is",cc);
const result=playRound(hc,cc);
    
if (result === "win") {
    humanScore++;
    console.log("You won! The score is: You - " + humanScore + ", Computer - " + compScore);
} else if (result === "lose") {
    compScore++;
    console.log("You lost! The score is: You - " + humanScore + ", Computer - " + compScore);
} else {
    console.log("It's a tie! The score remains: You - " + humanScore + ", Computer - " + compScore);
}
    }
    console.log("Game Over!");
    console.log("Final Score: You - " + humanScore + ", Computer - " + compScore);
    if (humanScore > compScore) {
        console.log("Congratulations! You are the winner!");
    } else if (humanScore < compScore) {
        console.log("The computer wins. Better luck next time!");
    } else {
        console.log("It's a tie overall!");
    }
 }

 playGame();
