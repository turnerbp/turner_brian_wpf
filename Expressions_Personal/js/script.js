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

//This is the final print to show the results.
console.log (dancePractice + danceHours + runWeek + runTime + monthWeeks);

