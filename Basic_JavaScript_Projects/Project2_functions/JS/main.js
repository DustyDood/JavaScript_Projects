//Just some variables to test for our functions
var a = 22;
var b = 25;

//When the user clicks the button, they'll call this function.
//It simply show them two numbers added together. Wow.
function answerGet() {
    document.getElementById("answer").innerHTML = a + b;
}

//This function declares x as a string.
//It then concatenates some more words.
//Finally, it sets a paragraph equal to itself.

function concatPractice() {
    x = "This is a good way ";
    x += "to practice concatenation!";
    document.getElementById("concatenationPractice").innerHTML = x;
}
