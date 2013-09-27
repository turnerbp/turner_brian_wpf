/**
 * Brian Turner
 * 9/26/13
 * Assignment Functions
 */

//Functions Industry

//Prompt asking how many Vibes you are marching
var vibesMarch = prompt("How many vibes are you marching?");
//Prompt asking how many Marimbas you are marching
var marimbasMarch = prompt("How many marimbas are you marching?");
//setting up calculation for total number of vibe mallets
var totalVibes = calcTotalVibes(4,3);
//setting up calculation for total number of marimba mallets
var totalMarimba = calcTotalMarimba(4,3);
//running function for the calculation Vibes
function calcTotalVibes(totalVPair, totalVDifferentPair){
    //amount of soft,medium and hard mallets needed per person
    var totalVibes = totalVPair * totalVDifferentPair * vibesMarch;
    return totalVibes;
}
//running function for the calculation of the marimba mallets
function calcTotalMarimba(totalMPair, totalMDifferentPair){
    var totalMarimba = totalMPair * totalMDifferentPair * vibesMarch;
    return totalMarimba;
}
