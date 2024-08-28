let userScore=0  ;
let compScore=0 ;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");


const genCompChoice = ()=>{
    let options=["rock", "paper","scissors"];
    //rock, paper, scissors
    // Math.random() // gives random no. bw 0-1
    // Math.random() * 3 //gives random no. bw 0-3
    const randIdx=Math.floor(Math.random()*3) ;
    return options[randIdx];

}

const drawGame= ()=>{
    console.log("game was draw");
    msg.innerText="its draw";
   
}

const showWinner=(userWin, userChoice, compChoice)=>{

    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#37423d";
    } else {
        compScore++;
        compScorePara.innerText= compScore;
        console.log("you lose");
        msg.innerText=`you lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="#754043";
    }
}
const playGame= (userChoice) => {
      console.log("user choice=", userChoice);
      //generate computer choice
      const compChoice= genCompChoice()
      console.log("comp choice", compChoice);

      if (userChoice  ===compChoice ){
        drawGame()
      }else {
        let userWin = true;
        if (userChoice="rock")
            {
        userWin= compChoice==="paper" ? false : true ;
      }else if (userChoice==="paper") 
        {
        userWin= compChoice==="scissors" ? false :true
      }else 
       {
        userWin= compChoice==="rock" ? false:true
      }
      showWinner(userWin, userChoice, compChoice);
}
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
}
)
