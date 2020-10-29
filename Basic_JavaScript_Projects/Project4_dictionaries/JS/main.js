



//Creating a dictionary for functions to call!
    var noises = {
        dog:"Woof",
        Cat:"Meow",
        Frog:"KeroKero",
        Fox:"(Unintelligble noises)",
        Cat:"BleepBleep"
    }



//Calls the noise the cat makes.
function catNoise() {
    //As requested by the assignment, we are deleting the noises.Cat dictionary entry.
    //The result is that the button now shows "undefined" instead of "Meow".
    delete noises.Cat;
    document.getElementById("cat").innerHTML = noises.Cat;
}