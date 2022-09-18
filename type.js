const START_BUTTON = document.querySelector('#start-button');
    const CHOICES_AREA = document.querySelector('.choices-area');
    const ROUND_COUNT = document.querySelector('.round');
    const SCORE_COUNTER = document.querySelector('#score-counter');
    const TRY_AGAIN_BUTTON = document.querySelector('#try-again');
    const PLAYER_SCORE = document.querySelector('#player-score');
    const BOT_SCORE = document.querySelector('#bot-score');
    const ROUND_RESULT_PLAYER = document.querySelector('#round-result-player');
    const ROUND_RESULT_BOT = document.querySelector('#round-result-bot');

    let ctr = 1;
    /*  GAME START  */
    START_BUTTON.addEventListener('click', start = () => {
        START_BUTTON.style = 'display:none';
        CHOICES_AREA.style = 'display:flex';
        ROUND_COUNT.textContent = 'Round: ' + ctr;
        ROUND_RESULT_BOT.textContent = '';
        ROUND_RESULT_PLAYER.textContent = '';
        PLAYER_SCORE.textContent = 'You: ' + playerScore;
        BOT_SCORE.textContent = 'Bot: ' + botScore;
    })


    /*  Assigning of variables  */
    const COMP_CHOICES = ["rock", "paper", "scissors"];
    const ROCK_BUTTON = document.querySelector('#rock-choice');
    const PAPER_BUTTON = document.querySelector('#paper-choice');
    const SCISSORS_BUTTON = document.querySelector('#scissors-choice');
    const displayWinnerHtml = document.querySelector('#winner');
    let playerSelection;
    let playerScore = 0;
    let botScore = 0;

    /*  Computer Choice  */
    getComputerChoice = () => {
        let num = Math.floor(Math.random() * 3);
        let computerSelection = COMP_CHOICES[num];
        return computerSelection;
    }


    ROCK_BUTTON.addEventListener('click', () => {
        let playerSelection = 'rock';
        ctr++;
        ROUND_COUNT.textContent = 'Round: ' + ctr;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    })

    PAPER_BUTTON.addEventListener('click', () => {
        let playerSelection = 'paper';
        ctr++;
        ROUND_COUNT.textContent = 'Round: ' + ctr;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

    })

    SCISSORS_BUTTON.addEventListener('click', () => {
        playerSelection = 'scissors';
        ctr++;
        ROUND_COUNT.textContent = 'Round: ' + ctr;
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

    })



    playRound = (playerSelection, computerSelection) => {
        if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection ==
                "paper" && computerSelection == "rock") || (playerSelection == "scissors" &&
                computerSelection == "paper")) {
            ROUND_RESULT_PLAYER.textContent = 'Win';
            ROUND_RESULT_BOT.textContent = 'Lose'
            playerScore++;
            PLAYER_SCORE.textContent = 'You: ' + playerScore;

        } else if (playerSelection == computerSelection) {
            ROUND_RESULT_PLAYER.textContent = 'Draw';
            ROUND_RESULT_BOT.textContent = 'Draw'

        } else {
            ROUND_RESULT_PLAYER.textContent = 'Lose';
            ROUND_RESULT_BOT.textContent = 'Win'
            botScore++;
            BOT_SCORE.textContent = 'Bot: ' + botScore;

        }
        endGame();
    }

    endGame = () => {
        if (playerScore === 3) {
            CHOICES_AREA.style = 'display:none';
            playerScore = 0;
            botScore = 0;
            displayWinnerHtml.textContent = 'Congrats! You won the game!'
            TRY_AGAIN_BUTTON.style = 'display:inline-block';

        } else if (botScore === 3) {
            CHOICES_AREA.style = 'display:none';
            playerScore = 0;
            botScore = 0;
            displayWinnerHtml.textContent = 'Bot won. Nice try.'
            TRY_AGAIN_BUTTON.style = 'display:inline-block';
        }

    }
    TRY_AGAIN_BUTTON.addEventListener('click', () => {
        ctr = 1;
        start();
        displayWinnerHtml.textContent = '';
        TRY_AGAIN_BUTTON.style = 'display:none'
    })