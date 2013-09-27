/**
 * Brian Turner
 * 9/26/13
 * Functions Assignment
 */

//Functions Wacky

//prompt asking how many time do you want to play your warm-ups
var warmupTime = prompt("How many time do you want to play your warm-ups?");
var warmupLength = prompt("What is the length of your warm-ups in mins?");
var warmUpTotal = prompt("How many warm-ups do you have?");
var calcTime = function(totalTimeEach, totalWarm){
    var time = totalTimeEach * totalWarm * warmupTime;
    return time;
}

