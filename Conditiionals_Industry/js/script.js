/**
 * Brian Turner
 * 9/18/13
 * Assignment Conditionals
 * Conditionals Industry
 */

//Amount of Buses need for a Band Competition.

//prompt asking how many students you have in band
var studentsHave = prompt("How many students do you have in the Band?");
//prompt asking how many parents are going to ride the bus
var parentsRide = prompt("How many parents are going to ride the bus?");
//prompt asking how many seats are on a bus
var seatsBus = prompt("How many seats are on a bus?");
//calculate the total amount of people riding the bus.
var totalRiders = studentsHave++ + parentsRide++;
//calculate the amount of buses you will need
var amountBuses = totalRiders / seatsBus;
//amount of buses ordered
var busOrdered = 2
if(amountBuses <= busOrdered){
    console.log("You don't need to reserve any more buses");
}else{
    console.log("You need to reserve more buses");
}