"use strict";
const account = require('./account');
const prompt= require('prompt-sync')();
const index = require('./index');
// const wallet = require('./wallet');
// const index = require('./index')
//displays current account balance

function getBalance(){
  return account.accountBalance;
}
//take money out of account
function withdrawMoney(withdrawAmount){
    while (withdrawAmount > account.accountBalance){
        withdrawAmount = parseFloat(prompt(`You dont have that much in your account your balance is $${account.accountBalance} please enter new amount: `));
    }
    account.accountBalance -= withdrawAmount;
    console.log(`You have withdrawn $${withdrawAmount} from your account. `)
    return withdrawAmount;
}
//puts money into account
function depositMoney(depositedAmount){
    account.accountBalance += depositedAmount;
    console.log(`you have deposited $${depositedAmount} into your account.`);
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
function validatePin(pinInput){
    if (pinInput == account.accountPin){
        return true
    }
    else{
        return false
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
function checkForNumber(input) {
    return !isNaN(input);
}
module.exports.getBalance = getBalance;
module.exports.withdrawMoney = withdrawMoney;
module.exports.depositMoney = depositMoney;
module.exports.validatePin = validatePin;
module.exports.displayCashOnHand = displayCashOnHand;
module.exports.movesMoneyFromWallet = movesMoneyFromWallet;
module.exports.account = account;



