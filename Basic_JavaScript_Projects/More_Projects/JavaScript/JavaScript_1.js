
//Simple Switch/Case statement for ROYGBIV!
function ROYGBIVGo() {
    var x = document.getElementById("ColorChoice").value;
    console.log(x);
    switch(x.toUpperCase()) {
        case "RED":
            alert("Nice and bright!");
        break;
        case "ORANGE":
            alert("Non-traditional but nice!");
        break;
        case "YELLOW":
            alert("Nice and bright, like the sun.");
        break;
        case "GREEN": 
            alert("Green is quite a pretty color!");
        break;
        case "BLUE":
            alert("Blue is my favorite, too!");
        break;
        case "INDIGO":
            alert("Indigo is my second favorite!");
        break;
        case "VIOLET":
            alert("Violet always reminds me of Willy Wonka...");
        break;

        default:
            alert("Hey, that's not a part of ROYGBIV!");
    }
}

/*
Variable Hoisting testing
y = 5;
alert(y);
var y = 19;
*/


//Changing the second element grabbed by GetElementsByClass
function WindsOfDestiny() {
    var x = document.getElementsByClassName("magical");
    x[1].innerHTML = "This has been changed!";
}
WindsOfDestiny();

//Canvas Practice
function CanvasPractice() {
    var c = document.getElementById("painting");
    var ctx = c.getContext("2d");
    var gradient = ctx.createLinearGradient(250,0,0,0)
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(0.5, "green");
    gradient.addColorStop(1, "orange")
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 500);

}
CanvasPractice();