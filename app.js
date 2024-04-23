let userS=0;
let compS=0;
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
let userText=document.querySelector("#user_score");
let compText=document.querySelector("#comp_score");

const genComChoice=()=>{
    const options=["rock", "paper","scissors"];
    const idx=Math.floor(Math.random() * 3);
    return options[idx];

}

const drawGame=()=>{
    console.log("draw");
    msg.innerText="draw";
}

const showWinner=(userwin)=>{
    if(userwin){
        userS++;
        userText.innerText=userS;
        console.log("you won");
        msg.innerText="you won";
        msg.style.backgroundcolor="green";

    }else{
        compS++;
        compText.innerText=compS;
        console.log("comp womS")
        msg.innerText="you lose";
    }
}
 
const playGame =(userC)=>{
  console.log("user choice", userC);
  const compChoice=genComChoice();
  console.log("comp choice", compChoice);

  if(userC==compChoice){
    drawGame();
  }else{
    let userwin=true;
    if(userC=="rock"){
        userwin=compChoice==="paper"?false:true;
    }
    else if(userC=="paper"){
        userwin=compChoice==="scissors"?false:true;
    }else{
        userwin=compChoice==="rock"?false:true;
    }
    showWinner(userwin);
    }
    
  }



choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
    const userC=choice.getAttribute("id");
    playGame(userC);
    });
});