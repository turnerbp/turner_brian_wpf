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
var totalVibes = calcTotalPair(4,3);
//setting up calculation for total number of marimba mallets
var totalMarimba = calcTotalMarimba(4,3);
//running function for the calculation Vibes
function calcTotalVibes(totalVPair, totalVDifferentPair){
    //amount of soft,medium and hard mallets needed per person
    var totalVibes = totalVPair * totalVDifferentPair * vibesMarch;
    //return the value back to calcTotalVibes
    return totalVibes;
}
//running function for the calculation of the marimba mallets
function calcTotalMarimba(totalMPair, totalMDifferentPair){
    //amount of soft,medium and hard mallets needed per person
    var totalMarimba = totalMPair * totalMDifferentPair * marimbasMarch;
    //return the value back to calcTotalMarimba
    return totalMarimba;
}
//if/else statement to print the results
if(totalMarimba < 48 && totalVibes < 48){
    //adding a print statement say you should buy more marimba and vibe mallets
    console.log("You need to buy more Marimba and Vibe Mallets!");
}else{
    //adding print statement to say you do not need to buy anymore marimba or vibes mallets
    console.log("You do not need to buy anymore Marimba and Vibe Mallets!");
}