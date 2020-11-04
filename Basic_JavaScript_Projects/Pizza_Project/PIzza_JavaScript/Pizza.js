function getReceipt() {
  //This initializes our string so it can get passed from
  //function to function, growing line by line into a full getReceipt
  var text1 = "<h3>You ordered:</h3>";
  var runningTotal = 0;
  var sizeTotal = 0;
  var sizeArray = document.getElementsByClassName("size");

  //This for loop determines which size of pizza we selected
  for (var i = 0; i < sizeArray.length; i++) {
    if (sizeArray[i].checked) {
      var selectedSize = sizeArray[i].value;
      text1 = text1 + selectedSize + "<br />";
    }
  }
  //Wouldn't this be better as a switch statement..?
  //This if statement chain determines the base price of the pizza.
  if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
  } else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
  } else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
  } else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
  } else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
  } else if (selectedSize === "Tony's Family Special") {
    sizeTotal = 24;
  }
  runningTotal = sizeTotal;
  console.log(selectedSize + " = $" + sizeTotal + ".00");
  console.log("size text1: " + text1);
  console.log("subtotal: $" + runningTotal + ".00");
  //These variables will get passed on to each funciton
  getTopping(runningTotal, text1);
};

function getTopping(runningTotal, text1) {
  var toppingTotal = 0;
  //This array stores all of our toppings, including meats and vegetables
  var selectedTopping = [];
  //Creates an array for the meats
  var toppingArray = document.getElementsByClassName("toppings");

  //Now we add in an array to loop through for the vegetables!
  //NOTE: THis was originally below the meat ordering section
  //I moved it above so the list goes from left to right in the toppings ordered at the bottom of the page
  var vegetableArray = document.getElementsByClassName("veggies");
  for (var k = 0; k < vegetableArray.length; k++) {
    if (vegetableArray[k].checked) {
      selectedTopping.push(vegetableArray[k].value);
      console.log("Selected Vegetable item: (" + vegetableArray[k].value + ")");
      text1 = text1 + vegetableArray[k].value + "<br />";
    }
  }

  //This for loop goes through all the meat toppings and pushes them to the array
  for (var j = 0; j < toppingArray.length; j++) {
    if (toppingArray[j].checked) {
      selectedTopping.push(toppingArray[j].value);
      console.log("selected topping item: (" + toppingArray[j].value + ")");
      text1 = text1 + toppingArray[j].value + "<br />";
    }
  }




  //This gives the first topping for free!
  var toppingCount = selectedTopping.length;
  if (toppingCount > 1) {
    toppingTotal = (toppingCount - 1);
  } else {
    toppingTotal = 0;
  }

  //This is how much to charge currently
  runningTotal = (runningTotal + toppingTotal);
  //Listing the toppings purchased and some internal calculations
  //Used for debugging to ensure all parts are being pulled
  console.log("total selected topping items: " + toppingCount);
  console.log(toppingCount + " topping -1 free topping = " + "$" + toppingTotal + ".00");
  console.log("topping text1: " + text1);
  console.log("Purchase Total: $" + runningTotal + ".00");

  //Listing all the toppings ordered
  document.getElementById("showText").innerHTML = text1;
  //Total price of the pizza
  document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";

}
