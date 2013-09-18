/**
 * Brian Turner
 * Date: 9/18/13
 * Assignment Conditional
 * Conditionals_Wacky
 */

//Calculate how many suits you have and how many ties you need.

//prompted asking how many suits you have
var amountSuits = prompt"How many suits do you have?";
//prompt to ask how many ties you have
var amountTies = prompt"HOw many ties do you have?";
//calculate the amount of suit to tie ratio
var suitTieAmount = amountSuits - amountTies;
//if or else statement to find the answer
if(suitTieAmount <= amountSuits){
     //it it is <= amount suits
    console.log("You need to buy more ties!")
}else{
    //if it is greater than amountSuits
    console.log("You have plenty of ties!")
}

