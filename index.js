'use strict';
const atm = require("./atm");
const wallet = require("./wallet");
const prompt= require('prompt-sync')();

// function that asks for pin
function askForPin(){
    let pinInput = prompt("what is your account pin: ",)
    let correctPin = atm.validatePin(pinInput,atm.account.accountPin);
    if (correctPin == true){
        mainMenu();
    }
    else{
        return askForPin(pinInput);
    }
}
askForPin();
//function that lets you pick what you want to do
function mainMenu(){
    let userInput = promptFor("What are you looking to do? check balance, withdraw, deposit, check wallet or exit ", chars);
    if (userInput == "check balance"){
        let balance = atm.getBalance();
        console.log("Your account balance is: "+balance);
        return mainMenu();
    }
    else if( userInput == "withdraw"){
        let withdrawAmount = parseFloat(promptFor("How much would you like to withdraw ", checkForNumber));
            atm.withdrawMoney(withdrawAmount);
            wallet.cashOnHand += withdrawAmount;
            return mainMenu();
        
        }
        else if (userInput == "deposit"){
            let depositAmount = parseFloat(promptFor("How much would you like to deposit ", checkForNumber));
            if(depositAmount < wallet.cashOnHand){
                wallet.cashOnHand -= depositAmount;
                atm.depositMoney(depositAmount);
                return mainMenu();
                }
            else{
                console.log("You dont have that much money to deposit");
                return mainMenu();
            }
        }
    else if (userInput == "check wallet"){
        let cashOnHand = atm.displayCashOnHand(wallet.cashOnHand);
        console.log(cashOnHand)
        return mainMenu();
    }
    else if (userInput == "exit"){
        console.log("thankyou for using this ATM");
    }
    else{
        console.log("That was not a valid response please type \n check balance \n deposit \n withdraw \n see cash on hand \n")
        return mainMenu();
    }
}
function promptFor(question, valid) {
    try {
      do {
        var response = prompt(question).trim().toLowerCase();
      } while (!response || !valid(response));
      return response;
    } catch (error) {
      console.log(error);
    }
}

function chars(input) {
    return true;
}
function checkForNumber(input) {
    return !isNaN(input);
}

module.exports.mainMenu = mainMenu;