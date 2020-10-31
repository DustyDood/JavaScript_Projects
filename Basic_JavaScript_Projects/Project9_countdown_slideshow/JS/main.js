
//Creating a coutdown timer
function countdown() {
    var seconds = document.getElementById("seconds").value;
    console.log(seconds);

    function tick() {
        seconds--;
        document.getElementById("timer").innerHTML = seconds;
        setTimeout(tick, 1000);

        if(seconds == -1) {
            alert("Time's up!");
        }
    }
    tick();
}

//Slideshow practice time
var slideCount = 0;
SlideShowBegin();

function SlideShowBegin() {
    var slides = document.getElementsByClassName("Testing");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        
    }
    slideCount++;

    if (slideCount > slides.length) {
        slideCount = 1;
    }

    slides[slideCount-1].style.display = "block";
    setTimeout(SlideShowBegin, 3000);
}


/*
NOTE TO SELF:
The place where the script is called in your HTML document is important!!!!
I had called it for this script in the head before any div elements were defined.
When it tried to pick up a non-existent div element, it threw an error.
As a result, just calling the script later is what solved the issue...
Sigh... That was quite silly
*/


//Code from W3 since I was stuck...
/*
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Testing");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  console.log(slides[slideIndex-1]);
  slides[slideIndex-1].style.display = "block";  

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/