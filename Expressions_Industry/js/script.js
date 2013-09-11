/**
 * Brian Turner
 * 9/10/13
 * Expressions Industry
 */

//Calculating How much time and how much gas it take for me to get to one of my jobs.
//I will show The Time is takes, The amount of gas, and how my time and gas per month.

//How many miles to the job
var milesJob = 123;
//Average Driving Speed
var drivingSpeed = 75;
//Average mile per gallon
var averageGallon = 22;
//Amount of times per month I went
var amoutTimes = 4;
//calculate the amount of time it took
var hoursTime = milesJob / drivingSpeed;
//calculate the amount of gas I will need to get there
var gasNeed = milesJob / averageGallon;
//

console.log ("It took me " + hoursTime + " to get to my job and I needed " + gasNeed + " gallons of gas.");
