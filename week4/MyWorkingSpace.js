// NAME: junhyung-kim
// DATE: 2024-03-25
// WEEK:4
// EXERCISE/ASSIGNMENT: complex statements



function Exercise1() {
	let randomNumber = getRandom(10);
	let num=(parseInt(prompt("enter number")));
	if(num == randomNumber)
	{
		print("conglutaration!!, your right!!");
	}
	else
	{
		print("I'm afraid that, the correct answer is",randomNumber);
	}
}

function Exercise2() {
	let randomNumber = getRandom(10);
	let num=(parseInt(prompt("enter number")));
	if(num == randomNumber)
	{
		print("conglutaration!!, your right!!");
	}
	else if(randomNumber==2, num==1){
		print("your so close the number 2");
	}
	else if(randomNumber==3, num==2){
		print("your so close the number 3");
	}
	else if(randomNumber==4, num==3){
		print("your so close the number 4");
	}
	else if(randomNumber==5, num==4){
		print("your so close the number 5");
	}
	else if(randomNumber==6, num==5){
		print("your so close the number 6");
	}
	else if (randomNumber==7, num==6){
		print("your so close the number 7");
	}
	else if (randomNumber==8, num==7){
		print("your so close the number 8");
	}
	else if (randomNumber==9, num==8){
		print("your so close the number 9");
	}
	else if (randomNumber==10, num==9){
	print("your so close the number 10");
	}
	else
	{
		print("I'm afraid that, the correct answer is",randomNumber);
	}
}

function Exercise3() {
let alreadyHasJob = false;

let lookingForJob = true;

let age = (parseInt(prompt("enter your age")));

let computerSkills = "high";

let hasUniversityDegree = false;

let hasWorkVisa = false;



if ((!alreadyHasJob || lookingForJob ) && (computerSkills == "high"

|| hasUniversityDegree) && (age <= 35 || hasWorkVisa)) {



print ("You are eligible to work in Korea");

 }
else
 {
print ("Sorry. You can't work in Korea, because you have already passed away possible age");
}
}
function Exercise4(){ 
function findCandies() {
    for (let candies = 1; candies < 200; candies++) {
        if (candies % 5 === 2 && candies % 6 === 3 && candies % 7 === 2) {
            return candies;
        }
    }
    return null;
}

let result = findCandies();

if (result !== null) {
    print("The number of candies in the jar is: " + result);
} else {
    print("that is not a correct answer");
}
}

function Exercise5() {

let Identity=(prompt("enter your Identity senior_citizen or students"));
let age=(prompt("enter your age"));
let ticket=(prompt("enter your ticket VIP/Regular/Economy"));	
let num1=500;
let num2=200;
let num3=1000;
let num4=10;
let num5=20;
if((Identity=="students" && age<=50
	&&ticket=="Regular")){
print("the ticket price is", num1-=(num1/num4),"$");
}
else if((Identity=="students"&&age<=50
&&ticket=="Economy")){
print("the ticket price is", num2-=(num2/num4),"$");
}
else if((Identity=="students"&&age<=50
&&ticket=="VIP")){
print("the ticket price is", num3,"$");
}
else if((Identity=="senior_citizen"&&age<=59
&&ticket=="Regular")){
print("the ticket price is", num1,"$");
}
else if((Identity=="senior_citizen"&&age<=59
&&ticket=="Economy")){
print("the ticket price is", num2,"$");
}
else if((Identity=="senior_citizen"&&age<=59
&&ticket=="VIP")){
print("the ticket price is", num3,"$");
}
else if((Identity=="senior_citizen"&&age>=59 
&&ticket=="Regular")){
print("the ticket price is", num1-=(num1/num5),"$");
}
else if((Identity=="senior_citizen"&&age>=59
&&ticket=="Economy")){
print("the ticket price is", num2-=(num2/num5),"$");
}
else if((Identity=="senior_citizen"&&age>=59
&&ticket=="VIP")){
print("the ticket price is", num3-=(num3/num5),"$");
}
else{
print("the ticket price is", num1,"$");
}
}

function Exercise6() {
let year=(parseInt(prompt("enter the year")));
   if((year % 4 == 0 && year % 100 != 0 
|| year % 400 == 0)){
   print("the year is leap year",year,"true");
   }
else{
	print("the year is not leap year, false");
}
	
}

function Exercise7() {
 var currentDate = new Date();
 var NextDays=(parseInt(prompt("enter your days number")));
  var futureDate = new
  Date(currentDate.getTime() + (NextDays * 24 * 60 * 60 * 1000)); // your days number * hour of the days * 1hour * 1minutes* m/s//
  var days =['sunday','monday','tuseday','wendsday','thursday','friday','saturday'];
  var futureDayOfWeek = 
  days[futureDate.getDay()];
 print("the days of your week is,"+futureDayOfWeek);
}

function Exercise8() {
	clearPrintSpace()
	
}

function Exercise9() {
	clearPrintSpace()
	
}

//Clear working space
function clearPrintSpace() {
	clearAll();
}