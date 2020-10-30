//To practice with document.write, I'm not even going to touch the HTML for this one!

//Practice with typeof()
document.write("The word \"Stan\" is of the data type: " + typeof("Stan"));

//Practice showing the "numbers" that don't function like standard numbers!
//First, NaN
document.write("<br>" +"If you try to divide zero by zero, Javascript will display 'Not a Number', like so: " + 0/0);

//Second, positive infinity
document.write("<br>" +"If you divide a positive number by zero, Javascript displays infinity, like so: " + 1/0);

//Third, negative infinity
document.write("<br>" +"If you divide a negative number by zero, Javascript displays negative infinity, like so: " + -134/0);

//Another way to show positive infinity
document.write("<br>" +"Here's another way to display positive infinity: 34E1000: " + (34E1000));

//Another way to show negative infinity
document.write("<br>" +"Here's another way to display negative infinity: -34E1000: " + (-34E1000));

//Showing Boolean Logic
document.write("<br>" + "Here we'll compare to see if 100 < 40!: " + (100<40));

//Practicing with Console messages
console.log("The answer is: " + 100 * 20);

console.log(true==false);

console.log(20*8 == 150);
console.log(20*8 == 160);

//Triple equals sign practice
console.log("Should be true, false, false, false")
console.log(100 === 100);
console.log(100 === "20");
console.log(100 === "100");
console.log(100 === 20);

//Boolean Logical Operator practice
//Showing usage of both && and ||
console.log("Should alternate between true and false");
console.log(3 < 10 && 20 > 10);
console.log(3 > 10 && 20 > 10);
console.log(3 > 10 || 20 > 10);
console.log(3 > 10 || 20 < 10);

//Now for ! practice
console.log("Now practicing with !")
console.log(!(30 < 20));
console.log(!(30 > 20));

//! can be used as an operator if for a direct comparison
console.log(30 != 20);

//Coercion practice!
document.write("<br>" + "What happens if you add the string 103 to the number 89? You get: " + ("103" + 89));

