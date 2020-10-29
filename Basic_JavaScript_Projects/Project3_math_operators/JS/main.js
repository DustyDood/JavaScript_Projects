//Demonstrating various operators in JS!

//This function adds the two values in p1
function adding() {
    document.getElementById("Math").innerHTML = 25+7;
}

//This functions subtracts the two values in p2
function subtracting() {
    document.getElementById("Subtraction").innerHTML = 157-24;
}

//This functions multiplies the two values in p3
function multiplying() {
    document.getElementById("Multiplication").innerHTML = 24*13;
}

//This functions divides the two values in p4
function dividing() {
    document.getElementById("Division").innerHTML = 2324/16;
    //Also utilizing some Modulo practice!
    document.getElementById("Modulo").innerHTML = 2324%16;
}

//Now that all the basic operations are shown, let's throw them together!
function mathing() {
    x = (10-5) * 20 - 5 * 5;
    document.getElementById("BasicMath").innerHTML = x;
}

//Showing the Negation Operator!
function negation() {
    document.getElementById("Negative").innerHTML = -x;

    //Why does this work? I thought scope would cause issues... Unless everything in JS is global now..?
}

//Practicing increment operator
function increment() {
    document.getElementById("foo").innerHTML++;
}

//Practicing decrement operator
function decrement() {
    document.getElementById("foo").innerHTML--;
}

//Utilizing Math Random with rounding, as well!
//This gives an integer from 0 to 1000, as the decimals are rounded.
function randomStart() {
    document.getElementById("random").innerHTML = Math.round(Math.random() * 1000);
}