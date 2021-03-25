"use strict";
const account = require('./account');
const { cashOnHand } = require('./wallet');
//displays current account balance

function getBalance(accountBalance){
   return accountBalance;
}
//take money out of account
function withdrawMoney(accountBalance,withdrawnMoney,){
    accountBalance = accountBalance - withdrawnMoney;
    return accountBalance;
}
//puts money into wallet
function movesMoneyToWallet(withdrawnMoney,cashOnHand){
    cashOnHand = cashOnHand + withdrawnMoney;
    return cashOnHand;
}
//puts money into account
function depositMoney(accountBalance,depositedAmount,){
    accountBalance = accountBalance + depositedAmount;
    return accountBalance;
}
//takes money out of wallet
function movesMoneyFromWallet(depositedAmount,cashOnHand){
    cashOnHand = cashOnHand - depositedAmount;
    return cashOnHand;
}
function displayCashOnHand(cashOnHand){
    return cashOnHand;
}
//validates the users pin 
function validatePin(pinInput,accountPin){
    if (pinInput == accountPin){
        return true
    }
    else{
        return false
    }
}
module.exports.getBalance = getBalance;
module.exports.withdrawMoney = withdrawMoney;
module.exports.depositMoney = depositMoney;
module.exports.validatePin = validatePin;
module.exports.displayCashOnHand = displayCashOnHand;
module.exports.movesMoneyFromWallet = movesMoneyFromWallet;
module.exports.movesMoneyToWallet = movesMoneyToWallet;
module.exports.account = account;



