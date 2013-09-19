/**
 * Brian Turner
 * Date: 9/18/13
 * Assignment Conditional
 * Conditionals_Wacky
 */
//Calculate how many suits you have and how many ties you need.

//prompted asking how many suits you have
var amountSuits = prompt("How many suits do you currently own?");
//prompt to ask how many ties you have
var amountTies = prompt("How many ties do you have?");
//ask how many dress shirts do you have
var amountShirts = prompt("How many dress shirts do you have?");
//calculate the amount of suit to tie ratio
var suitTieAmount = amountTies - amountSuits;
//calculate the dress shirt to Tie Ratio
var suitShirtAmount = amountShirts - amountSuits;
//calculate the dress shirt to tie ratio
var shirtTieAmount = amountTies - amountShirts;
//if/else statement added
if(suitShirtAmount <= shirtTieAmount && suitTieAmount < amountSuits){
    //added print statement if Shirt and Tie amount are less than Suits
   console.log("You need to buy some more Dress Shirt and Ties!");
}else{
    //added print statement to the else " Buy more Shirts and Ties"
    console.log("You do not need to buy more shirts or ties!")
}
