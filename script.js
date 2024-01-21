const first = document.getElementById('first');
const second = document.getElementById('second');
const button = document.querySelector('#first > button');
const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissor = document.getElementById('Scissor');
const computerChoices = ["Rock", "Paper", "Scissor"];
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const comp_choice_H2 = document.getElementById('comp-choice');
const restart = document.querySelector('.second > button')
const username = document.getElementById('name');
const year = document.getElementById('year');
let userScore = 0, computerScore = 0;

year.innerHTML = new Date().getFullYear();

button.addEventListener('click', () => {
    let name = prompt("Enter Your In-Game Username");
    while (name === "") {
        name = prompt("Kindly Enter Your Username Please")
    }
    username.innerHTML = name;
    if (name != null) {
        first.style.display = 'none';
        second.style.display = 'flex';
    }
    second.style.flexDirection = 'column';
});

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return computerChoices[index];
}

function win(choice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    choice.classList.add('green-border');
    setTimeout(() => choice.classList.remove('green-border'), 350);
}

function lose(choice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    choice.classList.add('red-border');
    setTimeout(() => choice.classList.remove('red-border'), 350);
}

function draw(choice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
    choice.classList.add('white-border');
    setTimeout(() => choice.classList.remove('white-border'), 350);
}

function playGame(userChoice, choice) {
    let compChoice = getComputerChoice();
    comp_choice_H2.innerHTML = `Computer Choose ${compChoice}`;
    switch (userChoice + compChoice) {
        case "RockScissor":
        case "PaperRock":
        case "ScissorPaper":
            win(choice);
            break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            lose(choice);
            break;
        default:
            draw(choice);
            break;
    }
}

function reset() {
    userScore = 0, computerScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = computerScore;
}

function main() {
    rock.addEventListener('click', () => playGame("Rock", rock));
    paper.addEventListener('click', () => playGame("Paper", paper));
    scissor.addEventListener('click', () => playGame("Scissor", scissor));
    restart.addEventListener('click', () => reset())
}

main();