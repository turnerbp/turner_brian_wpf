/**
 * Brian Turner
 * 9/10/13
 * Expressions Industry
 */

//Calculating How much time and how much gas it take for me to get to one of my jobs.
//I will show The Time is takes, The amount of gas, and how my time and gas per month.

//How many miles to the job
var milesJob = prompt("Enter the total miles it takes you to get to work?");
//Average Driving Speed
var drivingSpeed = prompt("What is your Driving speed?");
//Average mile per gallon
var averageGallon = prompt("What is your average gallon per mile?");
//Amount of times per month I went
var amountTimes = prompt("How many times do you drive to work?");
//calculate the amount of time it took
var hoursTime = milesJob / drivingSpeed;
//calculate the amount of gas I will need to get there
var gasNeed = milesJob / averageGallon;
//Amount of time per month on road.
var timePerMonth = hoursTime * amountTimes;
//Amount of Gas I need per month.
var gasPerMonth = gasNeed * amountTimes;
//Print It too me x hours to get to my job and I need x gallons of gas. I spend x hours of driving time and use gallons of gas per month
console.log ("It took me " + hoursTime + " hours to get to my job and I needed " + gasNeed + " gallons of gas." + " I spend " + timePerMonth + " hours of driving time and use " + gasPerMonth +  " gallons of gas per month.");
