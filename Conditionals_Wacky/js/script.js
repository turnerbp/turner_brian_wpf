/**
 * Brian Turner
 * Date: 9/18/13
 * Assignment Conditional
 * Conditionals_Wacky
 */
//Calculate how many suits you have and how many ties you need.

//prompted asking how many suits you have
var amountSuits = prompt("How many suits do you have?");
//prompt to ask how many ties you have
var amountTies = prompt("How many ties do you have?");
//ask how many dress shirts do you have
var amountShirts = prompt("How many dress shirts do you have?");
//calculate the amount of suit to tie ratio
var suitTieAmount = amountTies - amountSuits;
//calculate the dress shirt to Tie Ratio
var suitShirtAmoung = amountShirts - amountSuits;
