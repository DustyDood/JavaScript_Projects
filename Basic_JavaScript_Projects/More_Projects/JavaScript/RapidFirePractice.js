
var rexrex = document.getElementById("gonezo");
rexrex.classList.add("fade-out");

function blankTest() {
    var nia = document.forms["formTest"]["phoneNumber"].value;
    if (nia == "") {
        alert("You must enter something in this field!");
        return false;
    }
}

/*Popup form testing*/
/*Clicking the button causes the popup in the bottom right while the button itself disappears
I could just keep it all in the bottom right by copying positioning, but I wanted the button to be in the center
*/
function andddOpen() {
    document.getElementById("secondForm").style.display = "block";
    document.getElementsByClassName("openSesame")[0].style.display = "none";
}

function closeItDown() {
    document.getElementById("secondForm").style.display = "none";
    document.getElementsByClassName("openSesame")[0].style.display = "inline";
}

/*Slideshow Testing*/
var slideIndex = 0;

slideGo();

function slideGo() {
    var i;
    var x = document.getElementsByClassName("autoSlideshow");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1};
    x[slideIndex-1].style.display = "block";
    setTimeout(slideGo, 2000);
}