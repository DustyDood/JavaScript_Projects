//Practicing with scope! 
//Declaring X globally and then y locally
var x = 10;
function add() {
    var y = 20;
    x + 5;
    console.log("X is now " + x);
}
add();

//Previously, this code didn't work, as y was a local variable.
//I declared it globally so addVariables() won't throw an error.
var y = 20;
function addVariables() {

    console.log(x + y);
}
addVariables();


//Using the Date().getHours() method to give a personalized time greeting.
function TimeGet() {
    var x = new Date().getHours();

    //Currently, y doesn't work.
    //How do we store y as a pathway for document.getElementById("Time") rather than the value at that point in time?
    var y = document.getElementById("Time").innerHTML;
    
    if(x == 12) {
        document.getElementById("Time").innerHTML = "Good afternoon! It is currently " + x;
    }
    else {
        console.log("It's not 12");
    }
}

//Practicing with my own if statement
function CoinFlip() {
    var flip = Math.random();
    console.log(flip);
    if(Math.round(flip) == 1) {
        document.getElementById("coinResult").innerHTML = "Heads!";
    }
    else {
        document.getElementById("coinResult").innerHTML = "Tails!";
    }
}

//Practicing if statement with radio buttons for input
function judging() {
    if (document.getElementById("morning").checked) {
        document.getElementById("Results").innerHTML = "You are a morning person."
    }
    else if (document.getElementById("night").checked) {
        document.getElementById("Results").innerHTML = "You are a night owl."
    }
}

//Copying If/Else code from previous assignment, as requested
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time<12 == Time>0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}