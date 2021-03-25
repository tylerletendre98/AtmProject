"use strict";
const account = require('./account');
//displays current account balance

function getBalance(currentBalance){
    console.log(currentBalance);
}

function withdrawMoney(currentBalance,withdrawnMoney){
    let newBalance = currentBalance - withdrawnMoney;
    return newBalance;
}

function depositMoney(currentBalance,depositedAmount){
    let newBalance = currentBalance + depositedAmount;
    return newBalance;
}
function validatePin(pinInput,accountPin){
    if (pinInput === accountPin){
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
module.exports.account = account



