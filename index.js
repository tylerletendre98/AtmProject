'use strict';
const { accountBalance, accountPin } = require("./account");
const atm = require("./atm");
const { cashOnHand } = require("./wallet");
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
    let userInput = prompt("What are you looking to do check balance, withdraw , deposit, see cash on hand or exit ");
    if (userInput == "check balance"){
        let balance = atm.getBalance(atm.account.accountBalance);
        console.log("Your account balance is: "+balance);
        return mainMenu();
    }
    else if( userInput == "withdraw"){
        if (withdrawAmount < atm.account.accountBalance){
            let withdrawAmount = parseFloat(prompt("how much would you like to withdraw "));
            atm.account.accountBalance = atm.withdrawMoney(atm.account.accountBalance,withdrawAmount,atm.account.wallet.cashOnHand);
            atm.account.wallet.cashOnHand = atm.movesMoneyToWallet(withdrawAmount,atm.account.wallet.cashOnHand);
            console.log("Your new account balance is " + atm.account.accountBalance);
            return mainMenu();
        }
        else{
            console.log("You do not have enough money in your account");
        }
    }
    else if (userInput == "deposit"){
        let depositAmount = parseFloat(prompt("How much would you like to deposit "));
        if(depositAmount < cashOnHand){
        atm.account.accountBalance = atm.depositMoney(atm.account.accountBalance,depositAmount,atm.account.wallet.cashOnHand);
        atm.account.wallet.cashOnHand = atm.movesMoneyFromWallet(depositAmount,atm.account.wallet.cashOnHand);
        console.log("Your new account balance is " + atm.account.accountBalance);
        return mainMenu();
        }
        else{
            console.log("You dont have that much money to deposit");
            return mainMenu();
        }
    }
    else if (userInput == "see cash on hand"){
        let cashOnHand = atm.displayCashOnHand(atm.account.wallet.cashOnHand);
        console.log(cashOnHand)
        return mainMenu();
    }
    else if (userInput == "exit"){
        console.log("thankyou for using this ATM");
    }
    else{
        return mainMenu();
    }
}

