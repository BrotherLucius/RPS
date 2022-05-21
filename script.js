const container = document.querySelector('#container');
let userScore = 0;
let cpuScore = 0;
let win = "";
const winner = document.createElement('div');
const uScore = document.createElement('div');
const cScore = document.createElement('div');
winner.textContent = win;
uScore.textContent = userScore;
cScore.textContent = cpuScore;
const user = document.createElement('div');
const CPU = document.createElement('div');
user.textContent = "User Score";
CPU.textContent = "CPU Score";
container.appendChild(user);
container.appendChild(CPU);
user.appendChild(uScore);
CPU.appendChild(cScore);
container.appendChild(winner);


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

function choose(user){
    let cpu = computerPlay();
    if((cpu === "rock" && user === "Scissors") || (cpu === "paper" && user === "Rock") || (cpu === "scissors" && user === "Paper")){
        cpuScore++;
        winner.innerHTML = "CPU wins";
        cScore.innerHTML = cpuScore;
    }else if((user === "Rock" && cpu === "scissors") || (user === "Paper" && cpu === "rock") || (user === "Scissors" && cpu === "paper")){
        userScore++;
        winner.innerHTML = "User wins";
        uScore.innerHTML = userScore;
    }else{
        winner.innerHTML = "It's a tie";
    }
    if(userScore == 5 || cpuScore == 5){
        if(cpuScore = 5){
            winner.innerHTML = "Game over: CPU wins";
        }else{
            winner.innerHTML = "Game over: User wins";
        }
        userScore = 0;
        cpuScore = 0;
        uScore.innerHTML = userScore;
        cScore.innerHTML = cpuScore;
    }
}

