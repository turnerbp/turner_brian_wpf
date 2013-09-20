/**
 * Brian Turner
 * 9/18/13
 * Assignment Conditionals
 * Conditionals Personal
 */

//Buy new Furniture

//Added Prompt to ask the price of the Furniture you are going to buy.
var furniturePrice = prompt("What is the price of the furniture you are wanting to buy?");
//Added Prompt to ask the total House Budget.
var houseBudget = prompt("What is you monthly house hold budget?");
//Added Prompt to ask the Monthly Income.
var monthlyIncome = prompt("What is the monthly house hold income?");
//Added prompt to ask how many months you want to save money
var monthSave = prompt("How many months do you want to save?")
//calculating the amount of money you have after you pay your bills
var moneyLeft = monthlyIncome - houseBudget;
//calculate money left over minus the furniture price to see how much left you need to buy the furniture
var moneyNeeded = furniturePrice - moneyLeft;
//calculation to see how much you need to save per month
var savePerMonth = furniturePrice / monthSave;
(moneyLeft > furniturePrice) ?  console.log("You have enough money to buy the furniture!")  : console.log("Print")

