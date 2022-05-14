function computerPlay(){
    if(getRandomInt(1,3) == 1){
        return "rock";
    }else if(getRandomInt(1,3) == 2){
        return "paper";
    }else{
        return "scissors";
    }       
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + 
    min);
}
console.log(computerPlay());
let userPick = prompt("Choose either rock, paper, or scissors");
function choose(){
    if(computerPlay() == userPick.toLowerCase()){
        return "It's a tie";
    }else if(computerPlay() === "rock" && userPick.toLowerCase() === "scissors" || computerPlay() === "paper" && userPick.toLowerCase() === "rock" || computerPlay() === "scissors" && userPick.toLowerCase() === "paper"){
        return "User wins";
    }else if(userPick.toLowerCase() === "rock" && computerPlay() === "scissors" || userPick.toLowerCase() === "scissors" && computerPlay() === "paper" || userPick.toLowerCase() === "paper" && computerPlay() === "rock"){
        return "User wins";
    }

}
console.log(choose());