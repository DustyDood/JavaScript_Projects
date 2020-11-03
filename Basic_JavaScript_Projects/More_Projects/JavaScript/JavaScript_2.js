function validationStation() {
    var x = document.forms["formtest"]["firstName"].value;
    if (x == x.toUpperCase()) {
        alert("Name entered");
        return true;
        
    }
    else {
        alert("I said use all caps!");
        return false;
    }
}

function HoistTest() {

    {

        var x = "Hello global";
        alert("1: " + x);

    }
    alert("2: " + x);
}
HoistTest();

alert(x);