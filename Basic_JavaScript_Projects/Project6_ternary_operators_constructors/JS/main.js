
//Function to see if you're tall enough to ride the coaster.
//If you use is below 52, they are not tall enough.
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short " : "You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

//Function to see if the user is old enough to vote.
//If the user is not yet 18, they are not allowed to vote.
function Vote_Function() {
    var userAge, canVote;
    userAge = document.getElementById("Age").value;
    canVote = (userAge >= 18) ? "You are old enough " : "You are too young ";
    document.getElementById("Vote").innerHTML = canVote + "to vote.";
}

//Constructor and This practice
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}


//More Constructor and This practice
function Person(Name, Age) {
    this.Name = Name;
    this.Age = Age;
}
var Dusty = new Person("Dusty", 29);
function boop() {
    document.getElementById("New_and_This").innerHTML = "Hello! My name is "
    + Dusty.Name + " and I am currently " + Dusty.Age + " years old.";
}

/*
//This causes an error! JS gets confused because you can't use new as a var name.
var new = "test";
console.log(new);
*/

//practicing with nested functions
var x = 0;
function count() {
    upOne();
    document.getElementById("Nested_Function").innerHTML = x;
    function upOne() {
        x++
    }
}