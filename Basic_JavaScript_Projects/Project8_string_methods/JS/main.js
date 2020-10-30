
//Creating a function to do some basic concatenation
function ConcatGo() {
    var a = "Putting a ";
    var b = "sentence together is ";
    var c = "as easy as 1, 2, 3!";
    var whole = a.concat(b, c);
    console.log(whole);
    document.getElementById("RexRex").innerHTML = whole;
}

//Practicing slicing
function NiceSlice() {
    var x = document.getElementById("turtles").innerHTML;
    var y = x.slice(27, 36)
    console.log(y);
    console.log(x);
    document.getElementById("putback").innerHTML = y;
}

//Using toUpperCase() to make a whole string uppercase
function startYelling() {
    var x = document.getElementById("Yell").innerHTML;
    x = x.toUpperCase();
    console.log(x);
    document.getElementById("Yell").innerHTML = x;
}

//Creating an input box for users. Whatever characters are entered we'll be searched in the sentence above it.
//If a match is found, it will tell them where. otherwise, it'll tell them no match.
function Searching() {
    var x = document.getElementById("Foo").value;
    console.log(x);
    var y = document.getElementById("Walk").innerHTML;
    y = y.toUpperCase();
    console.log(y);

    var z = y.search(x.toUpperCase());
    console.log(z);


    if (x == "") {
        alert("enter a search term first!");
    }
    else if (z >= 0) {
        document.getElementById("SearchResult").innerHTML = "Your exact entry was found starting at character " + z + ".";
    }
    else {
        document.getElementById("SearchResult").innerHTML = "I'm sorry, but your entry was not found."
    }
}

//Practice converting a number down to a certain number of precision points.
function stringGoodness() {
    var x = 40121 / 81;
    console.log(x);
    var x = x.toPrecision(6);
    document.getElementById("stringResult").innerHTML = x.toString();
}

//Take a big number and round it to a certain number of decimal points.
function magic() {
    var x = 5230923.19302;
    x = x.toFixed(2);
    document.getElementById("bigNumber").innerHTML = x;

    //Added this section to show that elements affected by .toFixed() become a string.
    console.log(x);
    console.log(typeof x);

    //Practice with .valueOf()
    var y = document.getElementById("valueTesting").innerHTML;
    y = y.valueOf();
    console.log(typeof y)
    document.getElementById("valueTesting").innerHTML = y;


}