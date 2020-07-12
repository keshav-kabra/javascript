var Scrore,RoundScore ,ActivePlayer,Status,past ,gatinput,winningscore;

// 1 for true and 0 for false

reset();
// document.querySelector("#current-"+ActivePlayer).textContent = Dice;
// document.querySelector(".dice").style.display = "none";
function reset(){
document.getElementById("current-0").textContent = 0;
document.getElementById("score-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
document.querySelector("#name-0").textContent = "player 1";
document.querySelector("#name-1").textContent = "player 2";
Status = 1;
score =[0,0] ;
RoundScore = 0;
ActivePlayer = 0;
past = 0;
getinput = 0;
}



function changePlayer(){
    
    ActivePlayer === 0? ActivePlayer = 1: ActivePlayer =0;
    RoundScore = 0;
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
}


document.querySelector(".btn-roll").addEventListener("click",function(){
    if(Status === 1){
    //number of dice
    Dice = Math.floor(Math.random() * 6)+ 1;
    // checking the past value and current value for 6
    if (Dice === 6)
    {
        if(past === 6)
        {
            score[ActivePlayer] = 0;
            document.querySelector("#score-" + ActivePlayer).textContent = score[ActivePlayer];
        }
    }
    //image of the dice 
    var DiceDom = document.querySelector(".dice");
    
    DiceDom.style.display = "block";
    DiceDom.src ="dice-"+Dice+".png";
    //adding the score
    if (Dice !== 1)
    {
        RoundScore += Dice;
        past = Dice;
        document.querySelector("#current-"+ ActivePlayer).textContent = RoundScore;
    }
    else
    {
        changePlayer();
    }
    }
    

});

    document.querySelector(".btn-hold").addEventListener("click",function(){
    //set past to 0
    past = 0;
    // add score 
    score[ActivePlayer] += RoundScore;
    document.querySelector("#score-" + ActivePlayer).textContent = score[ActivePlayer];
    //decide the wining score
      getinput = document.querySelector(".input").value;
    console.log(getinput);
    if (getinput)
    {
        winningscore = getinput;
    }
    else{
        winningscore = 100;
    }
    //check if player wins
    if(score[ActivePlayer] >= winningscore)
    {
        document.querySelector("#name-" + ActivePlayer).textContent = "Winner!";
        Status = 0;
    }
    // change player
    
    
    changePlayer();
    

});

    document.querySelector(".btn-new").addEventListener("click",reset);
