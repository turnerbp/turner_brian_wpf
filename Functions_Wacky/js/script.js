/**
 * Brian Turner
 * 9/26/13
 * Functions Assignment
 */

//Functions Wacky

//prompt asking how many time do you want to play your warm-ups
var warmupTime = prompt("How many time do you want to play your warm-ups?");
//prompt asking What is the length of your warm-ups in mins
var warmupLength = prompt("What is the length of your warm-ups in mins?");
//prompt asking how many warm-ups do you have
var warmUpTotal = prompt("How many warm-ups do you have?");
//calculate the total time
var calcTime = function(totalTimeEach, totalWarm){
    //problem that calculates the information
    var time = totalTimeEach * totalWarm * warmupTime;
    //return the value back to CalcTime
    return time;
}
var totalTime = calcTime(warmupLength,warmUpTotal);
(totalTime > 200) ? console.log("You warm-ups are way to long!") : console.log("You warm-ups are long enough.");


