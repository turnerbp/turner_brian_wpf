/**
 * Brian Turner
 * 9/10/13
 * Expressions Wacky
 */

//Expressions Wacky

//this will add the price of the Standard Size Bass Drum heads (16,18,20,24,28).
var bassDrumPrice = [30.49 + 31.49 + 33.49 + 37.95 + 46.49];
//this will add the price of the standard size tenor drum heads (6,10,12,13,14)
var quadDrumPrice = [12.95 + 14.95 + 15.95 + 16.49 + 17.49];
//the will add the price of the standard size snare drum heads (14inch top and bottom).
var snareDrumPrice = [34.95 + 45.95];
//creating a prompt to ask how many times you will change your drum heads in one season.
var changeTimes = prompt("How many times will your change your drum heads in one season?");
//creating a prompt to ask how many snare drums you will be marching.
var snareMarch = prompt("How many snare drums will you be marching?");
//creating a prompt to ask how many tenors you will be marching.
var tenorMarch = prompt("How many quads will you be marching?");
//this will determine the the bass drum cost. This will assume you are marching the standard 5 bass drums.
var bassCost = bassDrumPrice * changeTimes;
//this will determine the price of the snare heads for the amount marching
var snareDrumCost = snareDrumPrice * snareMarch;
//this will determine the cost of the total snare heads for the season
var snareDrumTotal = snareDrumCost * changeTimes;
//this will determine the price of the quad heads for the amount marching
var quadDurmCost = quadDrumPrice * tenorMarch;
//this will determine the total price of the quad heads for the season
var quadDrumTotal = quadDurmCost * changeTimes;




