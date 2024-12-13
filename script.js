document.addEventListener('DOMContentLoaded', () => {
    let totalGamesPlayed = 0;
    let totalWins = 0;

    function startGuessingGame() { //starts the Guessing game
        let name;
        while (!name) {
            name = prompt("Hi! What's your name?"); //asks user for their name
            if (!name) {
                alert('Please enter your name');
            }
        }

        function playGame() {
            let randomNumber = Math.floor(Math.random() * 10) + 1; //randomize a number
            console.log(randomNumber);
            let guessCount = 0;
            let userGuess;
            userGuess = prompt("Guess a number between 1 and 10!");
            while (true) {
                if (isNaN(userGuess) || userGuess.trim() === "") {
                    alert("Please enter a valid response");
                    userGuess = prompt("Guess a number between 1 and 10!");
                    continue;
                }
                userGuess = parseInt(userGuess);
                guessCount++;
                if (userGuess === randomNumber) {
                    alert(`You guessed it in ${guessCount} guesses!`); //player guesses right
                    totalWins++;
                    break;
                } else if (userGuess > randomNumber) {
                    userGuess = prompt("Guess was too high, guess again!");
                } else {
                    userGuess = prompt("Guess was too low, guess again!");
                }
            }
            totalGamesPlayed++;
            if (confirm(`${name}, would you like to keep playing this game?`)) {
                playGame();
            } else if (confirm(`${name}, would you like to pick another game to play?`)) { //current game ends
            
            } else {
                alert(`See you later, ${name}! You won ${totalWins} time(s). You earned a ${getBadgeType()} badge!`);
                displayStats(name);
            }
        }
        playGame();
    }

    const startEvenAndOddGame = function() { //start even odd game
        let wins = 0;
        let losses = 0;
        let name;

        function playerName() {
            while (!name) {
                name = prompt("Hi! What's your name?"); //gets players name
                if (!name) {
                    alert('Please enter a name, ex: "Quinn"');
                }
            }
        }

        function playerGuess() {
            let guess;
            while (!guess || (guess.toLowerCase() !== "even" && guess.toLowerCase() !== "odd")) {
                guess = prompt(`Welcome ${name}, even or odd?`, "even");
                if (!guess || (guess.toLowerCase() !== "even" && guess.toLowerCase() !== "odd")) {
                    alert('Please enter "even" or "odd".');
                }
            }
            return guess.toLowerCase();
        }

        function playGame() {
            if (!name) {
                playerName();
            }

            let guess = playerGuess();

            let randomNumber1 = Math.floor(Math.random() * 4) + 1;
            let randomNumber2 = Math.floor(Math.random() * 4) + 1;

            let sum = randomNumber1 + randomNumber2; //calculating the random number by adding two random number together

            let result = (sum % 2 === 0) ? "even" : "odd";

            let outcome = (guess === result) ? "win" : "lose";

            if (outcome === "win") {
                wins++;
                totalWins++;
            } else {
                losses++;
            }

            alert(`${name}, you picked ${guess}. The sum is ${result}, you ${outcome}!`);
            alert(`Score: Wins: ${wins} - Losses: ${losses}`); //game score

            totalGamesPlayed++;
            if (confirm(`Do you want to play again ${name}?`)) {
                playGame();
            } else if (confirm(`${name}, would you like to pick another game to play?`)) { //game ends
               
            } else {
                alert(`See you later, ${name}! You won ${totalWins} time(s). You earned a ${getBadgeType()} badge!`);
                displayStats(name);
            }
        }
        playGame();
    };

    const startBearNinjaHunterGame = () => {  //starts bear ninja hunter game
        function toForcedCase(input) {
            return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        }

        let name;
        while (!name) {
            name = prompt('Welcome to Bear Ninja Hunter! Please enter your name to get started:'); //asks for your name
            if (!name) {
                alert('Please enter your name');
            }
        }
        alert(`Hi ${name} let's play!`);

        function playGame() {
            let choices = ['Bear', 'Ninja', 'Hunter'];
            let playerChoice = toForcedCase(prompt('Who are you: Bear, Ninja, or Hunter?')); //asks for your choice
            while (!choices.includes(playerChoice)) {
                alert('Please enter a valid response');
                playerChoice = toForcedCase(prompt('Who are you: Bear, Ninja, or Hunter?'));
            }
            let randomIndex = Math.floor(Math.random() * 3);
            let computerChoice = choices[randomIndex]; //randomizes bear ninja or hunter based on a random number
            let outcome;
            switch (playerChoice + computerChoice) {
                case 'BearBear':
                case 'NinjaNinja':
                case 'HunterHunter':
                    outcome = 1;
                    break;
                case 'BearHunter':
                case 'NinjaBear':
                case 'HunterNinja':
                    outcome = 2;
                    totalWins++;
                    break;
                case 'BearNinja':
                case 'NinjaHunter':
                case 'HunterBear':
                    outcome = 3;
                    break;
            }
            let message = `${name} you picked ${playerChoice}!\nThe computer picked ${computerChoice}!`;
            if (outcome === 1) {
                message += "\nIt's a tie!";
            } else if (outcome === 2) {
                message += "\nYou win!";
            } else if (outcome === 3) {
                message += "\nYou lose!";
            }
            alert(message);
            totalGamesPlayed++;
            if (confirm(`${name}, would you like to keep playing this game?`)) {
                playGame();
            } else if (confirm(`${name}, would you like to pick another game to play?`)) { //game ends
                
            } else {
                alert(`See you later, ${name}! You won ${totalWins} time(s). You earned a ${getBadgeType()} badge!`);
                displayStats(name);
            }
        }
        playGame();
    };

    function getBadgeType() {
        let winPercentage = (totalWins / totalGamesPlayed) * 100; //calculate badegs
        let badgeType //declare badges

        switch (true) {
            case (winPercentage >= 0 && winPercentage <= 25):
                badgeType = 'stone';
            case (winPercentage > 25 && winPercentage <= 50):
                badgeType = 'bronze';
            
            case (winPercentage > 50 && winPercentage <= 75):
                badgeType = 'iron';
            case (winPercentage > 75 && winPercentage <= 100):
                badgeType = 'silicon';
            
        }


        return badgeType;
    }

    function displayStats(name) {
        let winPercentage = (totalWins / totalGamesPlayed) * 100; //average percent of wins 

        let statsTable = `
            <table border="1">
                <tr>
                    <th>Total Games Played</th>
                    <th>Total Wins</th>
                    <th>Win Percentage</th>
                </tr>
                <tr>
                    <td>${totalGamesPlayed}</td>
                    <td>${totalWins}</td>
                    <td>${winPercentage.toFixed(2)}%</td>
                </tr>
            </table>
        `;  //the table

        document.getElementById('stats-container').innerHTML = statsTable;
    }

    function openGame(gameId) {  //function to link the game to each button
        const games = document.querySelectorAll('.game-container');
        if (gameId === 'game1') {
            startGuessingGame();
        } else if (gameId === 'game2') {
            startEvenAndOddGame();
        } else if (gameId === 'game3') {
            startBearNinjaHunterGame();
        }
    }

    window.openGame = openGame;
});