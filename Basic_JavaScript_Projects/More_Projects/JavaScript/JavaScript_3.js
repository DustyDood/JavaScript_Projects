
//Practicing with custom data attributes!
function foodtalk() {
    var looplength = document.getElementsByClassName("food");    

    //This part runs through the radio buttons, finds the checked button, and write what food it is and what day I like to eat it
    for (var i = 0; i < looplength.length; i++) {
        if(looplength[i].checked) {
            document.getElementById("FoodResult").innerHTML = "Yum! I love eating " + looplength[i].value + " on " + looplength[i].getAttribute("data-day_to_eat");
        }
    }

    
}