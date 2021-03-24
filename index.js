'use strict';

//Enter in 4 digit pin
let prompt = require('prompt-sync')();
let userInput = prompt("what is your 4 digit account pin");
function correctAccountPin(accountPin){
    if (accountPin == "3892"){
        return mainMenu()
    }
    else{
        return correctAccountPin(accountPin);
    }
}
correctAccountPin(userInput);