'use strict';
const { accountBalance, accountPin } = require("./account");
const atm = require("./atm");
const prompt= require('prompt-sync')();

// function that asks for pin
function askForPin(){
    let pinInput = prompt("what is your account pin: ")
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
    let userInput = prompt("What are you looking to do check balance, withdraw , deposit, or exit ");
    if (userInput == "check balance"){
        let balance = atm.getBalance(atm.account.accountBalance);
        console.log("Your account balance is: "+balance);
        return mainMenu();
    }
    else if( userInput == "withdraw"){
        let withdrawAmount = prompt("how much would you like to withdraw ");
        atm.account.accountBalance = atm.withdrawMoney(atm.account.accountBalance,withdrawAmount);
        console.log("Your new account balance is " + atm.account.accountBalance);
        return mainMenu();
    }
    else if (userInput == "deposit"){
        let depositAmount = parseFloat(prompt("How much would you like to deposit "));
        atm.account.accountBalance = atm.depositMoney(atm.account.accountBalance,depositAmount);
        console.log("Your new account balance is " + atm.account.accountBalance);
        return mainMenu();
    }
    else if (userInput == "exit"){
        console.log("thankyou for using this ATM");
    }
    else{
        return mainMenu();
    }
}

