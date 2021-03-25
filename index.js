'use strict';
const { accountBalance } = require("./account");
const atm = require("./atm");

function askForPin(pinInput){
    let pinInput = prompt("What is your four digit account pin: ");
    if (pinInput == atm.account.accountPin){
        mainMenu();
    }
    else{
        return askForPin(pinInput);
    }
}






function mainMenu(){
    let userInput = prompt("What are you looking to do check balance, withdraw , deposit, or exit ").toLowerCase;
    switch(userInput){
    case "balance":
        atm.getBalance(atm.account.accountBalance);
        break;
    case "withdraw":
        let withdrawAmount = prompt("How much would you like to withdraw");
        let newBalance = atm.withdrawMoney(atm.account.accountBalance,withdrawAmount);
        console.log(newBalance);
        break;
    case "deposit":
        console.log('deposit');
        break;
    case "exit":
        console.log(exit);
    }
}
