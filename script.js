function computerPlay(){
    if(getRandomInt(1,3) == 1){
        return "rock";
    }else if(getRandomInt(1,3) == 2){
        return "paper";
    }
    return "scissors";
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + 
    min);
}


function choose(){
    let userPick = prompt("Choose either rock, paper, or scissors");
    if((computerPlay() === "rock" && userPick.toLowerCase() === "scissors") || (computerPlay() === "paper" && userPick.toLowerCase() === "rock") || (computerPlay() === "scissors" && userPick.toLowerCase() === "paper")){
        return "Computer wins";
    }else if((userPick.toLowerCase() === "rock" && computerPlay() === "scissors") || (userPick.toLowerCase() === "paper" && computerPlay() === "rock") || (userPick.toLowerCase() === "scissors" && computerPlay() === "paper")){
        return "User wins";
    }else{
        return "it's a tie";
    }

}
alert(choose());