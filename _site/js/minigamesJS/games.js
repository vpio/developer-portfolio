var gameTitleHeader = document.getElementById('gameTitleHeader')
var gameResult = document.getElementById('gameResult')
var gameInstructionHeader = document.getElementById('gameInstructionHeader')
var gameDisplay = document.getElementById('gameDisplay')
var winsCounter = document.getElementById('winsCounter')
var livesCounter = document.getElementById('livesCounter')
var backButton = document.getElementById('backButton')
var lrButton = document.getElementById('left-right-select')
var timeButton = document.getElementById('time-select')

var games = (
  function gameModule() {

    /*
    ******************* LEFT OR RIGHT? ******************
    Guess the correct answer! Is it left or right? Press a key to find out.
    */

    function leftOrRight(){

      function handleKeypress(key) {
        var userInput = helpers.interpretGameInputs(key.key)
        gamePlay(userInput);
      }

      function gameSetup(){
        lrButton.style = 'display: none;'
        timeButton.style = 'display: none;'
        backButton.style = ''
        gameTitleHeader.innerHTML = 'Left Or Right?'
        gameInstructionHeader.innerHTML = 'Press either [<] or [>]'
        window.addEventListener('keypress', handleKeypress);
      }

      function gamePlay(userInput) {
        var answer = helpers.pickZeroOrOne();
        var result = (userInput == answer)
        result = (result) ? 'You win!' : 'You lose.'
        gameResult.innerHTML = result
        gameInstructionHeader.innerHTML = 'Guess again!'
        return result
      }

      gameSetup();
    }

    /*
    ******************* TIME ATTACK! ******************
    Press the correct Key before time runs out! If you lose all three lives, its game over!
    */

    function timeAttack(){
      var lives = 3;
      var wins = 0;
      var computerAnswer
      var userAnswer;

      function gameSetup(){
        lrButton.style = 'display: none;'
        timeButton.style = 'display: none;'
        backButton.style = ''
        winsCounter.innerHTML = "Wins: " + wins
        livesCounter.innerHTML = "Lives: " + lives
        gameTitleHeader.innerHTML = 'Time Attack!'
        gameInstructionHeader.innerHTML = 'Press the following key in time! '
        computerAnswer = helpers.getRandomCharacter();
        gameDisplay.innerHTML = computerAnswer
        window.addEventListener('keypress', (key) => {
          userAnswer = key.key
          gameDisplay.innerHTML = ''
        })
      }

      function gamePlay(){

        function timeOut(answer){
          answer = (userAnswer === computerAnswer) ? true : false;
          (answer) ? wins++ : lives -= 1
          answer = (answer) ? "Win!" : "Lose."
          gameResult.innerHTML = answer
          winsCounter.innerHTML = "Wins: " + wins
          livesCounter.innerHTML = "Lives: " + lives
          if (lives > 0){
            userAnswer = null;
            computerAnswer = helpers.getRandomCharacter();
            gameDisplay.innerHTML = computerAnswer
            startTimeout();
          } else { gameResult.innerHTML = 'GAME OVER' }
        }

        function startTimeout(){
          setTimeout(() => { timeOut() }, 1000);
        }

        startTimeout();
      }

      gameSetup();
      gamePlay();
    }


    return {
      leftOrRight: leftOrRight,
      timeAttack: timeAttack
    }
  })();
