let opp='';
 
    function getCompChoice(){
        let cc=math.random();
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

    function playRound(){
        opp = getCompChoice();
        const compChoice=document.createElement("p");
         compChoice.textContent=`The opponent chose ${opp}`
         if(opp==='paper')

    }
 


 const stone=document.createElement("button");
 const paper=document.createElement("button");
 const scissor=document.createElement("button");
 stone.addEventListener("click",()=>{playRound(stone)})
 paper.addEventListener("click",()=>{playRound(paper)})
 scissor.addEventListener("click",()=>{playRound(scissor)})
 const resultt=document.createElement("div");


