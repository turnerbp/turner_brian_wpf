/**
 * Brian Turner
 * 9/10/13
 * Expressions Worksheet
 */

// Sparkys Age
var sparkysAge = 84;
// Dogs age 7 times faster than humans
var dogYears = 7;
// Sparkys age divided by Dog Years
var actualAge = sparkysAge / dogYears;
// Result of Sparkys age Divided by Dog Years
// print out the output of the Dogs Age
console.log ("The Dogs age is " + actualAge);


// pizza part 1

//number of pizzas ordered
var pizzaOrdered = 8;
//number of slices per pizza
var slicesPizza = 8;
//number of people at the party
var numPeople = 27;
//number of slices per person
var pizzaSlice =  pizzaOrdered * slicesPizza / numPeople;
//total pizza ordered
//print out the output "I ordered a total of "
console.log ("Each person ate " + pizzaSlice + " slices of pizza at the party.");


//Pizza Part II
//Number of Pizzas ordered
var pizzaOrdered = 8;
//total number of slices per pizza
var totalSlices = 8;
//Number of slices per person.
var slicesPizza = 2;
//Number of people at the party.
var numPeople = 27;
//Number of slices for Sparky
var sparkySlice =  pizzaOrdered * totalSlices - slicesPizza * numPeople;
//total slices
//Print "Sparky got X slices of Pizza.
console.log ("Sparky got " + sparkySlice + " slices of Pizza");


//Grocery Budget

//Money spent on your 5 grocery bills
var groceryBills = [125 + 75 + 55 + 60 + 95]
//Added you grocery bills together to get your total Bill
var totalBill = groceryBills;
// set your total weeks to 5
var totalWeek = 5;
//found out your average per week. total bill divided your total week.
var avgWeek = totalBill / totalWeek;
// Print "You have spent a total of x on groceries over 5 weeks. That is an average of x per week"
// total bill and your total average
console.log("You have spent a total of $" + totalBill + " on groceries over 5 weeks. That is an average of $"
+ avgWeek +" per week");

//Discounts

//this is the original price of the item.
var orgPrice = 600;
// this is the Discount Tax to be Printed
var printDis = 20
//this is the discount on the product.
var disPercent = .20;
//this is the description of the item.
var blSuit = "Black Suite with Window Pain";
//this is the Sales Tax on the item
var salTax = .09;
//this is the discount on the suit
var disAmount = orgPrice  * disPercent;
//this is the discount price
var disPrice = orgPrice - disAmount;
//this is the amount of tax
var totalTax = disPrice * salTax;
//This is the total price with tax
var totalPrice = disPrice + totalTax;
//This is the total Price
//Print "Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax"
console.log ("Your " + blSuit + " was originally $" + orgPrice + " but after a " + printDis + "% discount,"
+ "it is now $" + disPrice + " without tax, and $" + totalPrice + " with tax.")




