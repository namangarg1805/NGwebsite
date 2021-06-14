//Solution To Spy Problem
var first=prompt("Enter First Name: ")
var last=prompt("Enter Last Name: ")
var age=prompt("Enter Age: ")
var height=prompt("Enter Height in Cm")
var pet=prompt("Enter Pet Name: ")
if (first[0]==last[0] && age>20 && age<30 && height>=170 && pet[pet.length-1])
{
  console.log("Narvis at your service")
}
else {
  console.log("Get Out")
}
