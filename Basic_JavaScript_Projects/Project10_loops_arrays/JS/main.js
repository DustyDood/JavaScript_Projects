
//Practicing with a while loop
function CountDown() {
    var i = 10;
    var placeholder = "Start! <br />";
    while (i > 0) {
        placeholder += i + "<br />";
        i--;
    }
    document.getElementById("decrementwhile").innerHTML = placeholder;
}

//practicing with .length
//Takes whatever is inputted and tells the user the length
function lengthteller() {
    var i = document.getElementById("tellme").value;
    var longlongman = i.length;
    document.getElementById("lengthresult").innerHTML = "Your input is equal to " + longlongman;
}

//For loop practice!
//Goes through an array and list out each character
function SuperSmashList() {
    var myfavs = ["Mario", "Shulk", "Diddy Kong", "Captain Falcon"];
    var favlist = ""
    for(var i = 0; i < myfavs.length; i++) {
        favlist += (i + 1) + ". " + myfavs[i] + "<br />";
    }
    document.getElementById("SSBUlist").innerHTML = favlist;
}
SuperSmashList();

//Array practice!
//Creating a Magic 8 ball that gives a yes/no response 
function magic8() {
    var result = ["Yes", "No", "Not likely", "likely", "Try again"];
    var eightsays = Math.round(Math.random() * 4);
    console.log(eightsays);
    document.getElementById("8result").innerHTML = result[eightsays];
}
//Technically, this isn't equally random since 0 and 4 are much harder to hit
//It'll work for this example, but it would be better to use a floor function


//Constant Practice
function constant_function() {
    const favGame = { 
        name: "TWEWY",
        genre: "ARPG"
    };

    //Practice adding a new property to the object and changing an old one.
    favGame.colorScheme = "dark colors with sharp lines."
    favGame.genre = "JRPG"


    document.getElementById("Constant").innerHTML = "My favorite game is " + favGame.name + " which is a " + favGame.genre + ". Its art style is " + favGame.colorScheme;
}


//Practicing with let and block scope.
function letitgo() {
    var x = "Dun dun dun dunnn"
    {
        //This doesn't get called since let makes it block scope!
        //If we change this to var, it would show.
        let x = "Ducktales. Woohoo!"


    }
    document.getElementById("LetPractice").innerHTML = x;
}
letitgo();

//Practicing with Return
function returntosender() {
    var foo = document.getElementById("YourName").value;
    function foobar(name) {
        return "Hello, " + name;
    }

    document.getElementById("returntext").innerHTML = foobar(foo);


}

//More practice with objects, let, and return
let firehouse = {
    name: "Old Betsy",
    color: "red",
    year: "1992",
    description() {
        return this.name + " is a " + this.color + " firehouse built in the year " + this.year + ".";
    }
}

document.getElementById("RexRex").innerHTML = firehouse.description();


//Practicing with Break and Continue for loops
function givemeabreak() {
    var statement = "";
    for (var x = 1; x < 11; x++) {
        statement += x + "<br />";

        if(x == 7) {
            break;
        }

    }
    document.getElementById("BreakLoop").innerHTML = statement;
}
givemeabreak();


function continuetime() {
    var counting = "";
    for (var x = 1; x < 11; x++) {
        if(x == 4) {
            continue;
        }
        counting += x + "<br />";
    }
    document.getElementById("ContinueLoop").innerHTML=counting;
}
continuetime();