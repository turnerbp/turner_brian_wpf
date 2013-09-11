/**
 * Brian Turner
 * 9/10/13
 * Expressions Personal
 */

// Script to find out how much exercise I am getting per month through workouts and dancing

//This is the amount of times I practice my dancing
var dancePractice = prompt("How many times per week do you practice your dancing?");
//This is the amount of hours you spend practicing each time
var danceHours = prompt("How many hours do you practice at one time?");
//This is to see how many times per week you run
var runWeek = prompt("How man times do you run per week?");
//This is to see how long your run for.
var runTime = prompt("How many minutes do you run for?");
//This is asking how many weeks in the month you are exercising in.
var monthWeeks = prompt("How many weeks in the month you are exercising in?");
//This will calculate the amount of hours I practice per week.
var dancePracticeHrsPerWeek = dancePractice * danceHours;
//This will calculate the amount of hours you run per week.
var runMinsPerWeek = runWeek *  runTime ;
//This will calculate the amount of time per month I dance
var dancePerMonth = dancePractice * monthWeeks;
//This will calculate the amount of hours a month I practice
var danceHrsPerMonth = danceHours * monthWeeks;
//This will calculate the amount of Days I run per month
var runDaysPerMonth = runWeek * monthWeeks;
//This will calculate the amount of minutes I run per month.
var runMinsPerMonth = runTime * monthWeeks;

//This is the final print to show the results.
console.log ("I have dance practice " + dancePractice+ " times per week and dance " + dancePracticeHrsPerWeek + " hours per week." + " I run " + runWeek + "times per week and "+ runMinsPerWeek + " minutes per week." + "I dance " + dancePerMonth + " per month and " + danceHrsPerMonth + " hours per month. " + "I run " + runDaysPerMonth + "days per month and " + "run " + runMinsPerMonth + "minutes per month.");

