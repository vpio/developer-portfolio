/*

The helperFunctions module contains simple functions to be used in games. These functions will perform tasks like randomly selecting a boolean value or randomly selecting a text character

*/

var helpers = (

  function helperFunctions(){

    function pickZeroOrOne() {
      var zeroOrOne = Math.floor(Math.random() * Math.floor(2))
      return (zeroOrOne === 0) ? false : true;
    }

    function getRandomCharacter(){
      var randInt = Math.floor(Math.random() * Math.floor(26))
      var charCode = randInt + 65
      var character = String.fromCharCode(charCode).toLowerCase();
      return character
    }

    function interpretGameInputs(key){
      var userInput;
      switch (key){
        case ',':
          userInput = false;
          break;
        case '.':
          userInput = true;
          break;
        default:
          userInput = null;
      }
      return userInput
    }

    function reload(){
      location.reload()
    }


    return {
      pickZeroOrOne: pickZeroOrOne,
      interpretGameInputs: interpretGameInputs,
      getRandomCharacter: getRandomCharacter,
      reload: reload
    }
  }
)();
