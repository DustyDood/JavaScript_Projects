//All SFX are provided from ZapSplat. Thank you, ZapSplat!

//This variable keeps track of who's turn it is.
let activePlayer = "X";
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

//This functino is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of the selectedSquare array to
    //see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //THis varaible retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer === "X") {
            //If activePlayer is equal to "X", the X.png is placed in HTML
            select.style.backgroundImage = "url('images/newx.png')";
        //Active player may only be "x" or "O" so, if not "X" it must be "O"
        } else {
            //If activePlayer is equal to "O", the o.png is placed in html.
            select.style.backgroundImage = "url('images/donut.png')";
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        console.log(selectedSquares);
        //This calls a function to check for any win conditions.
        checkWinConditions();

        //Changed the audio settings so it's different noises for each player
        //This condition is for changing the active player.
        if (activePlayer === "X") {
            //If active player is "X" change it to "O"
            audio("./media/placeX.mp3");
            activePlayer = "O";

        //If active player is anything other than "X"
        } else {
            //Change the active player to "X"
            audio("./media/placeO.mp3");
            activePlayer = "X";
        }

        //This function plays placement sound.
        //audio("./media/place.mp3");
        //This condition checks to see if it is the computer's turn.
        if(activePlayer==="O") {
            //This function disables clicking for computer choice.
            disableClick();
            //This function waits 1 second before placing the image and enabling click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for our computersTurn() function to work.
        return true;
    }

    //This function results in a random square being selected.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8;
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already
        while(!success) {
            //A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If the random number evaluates returns true, the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes our boolean and ends the loop.
                success = true;
            }
        }
    }

}

//This function parses the selectedSquares array to searched for win conditions.
//drawWinLine function is called to draw a line if the conditions are met.
function checkWinConditions() {
    // X 0, 1, 2 condition.
    if (arrayIncludes("0X", "1X", "2X")) {drawWinLine(50, 100, 558, 100); }
    // X 3, 4, 5 condition
    else if (arrayIncludes("3X", "4X", "5X")) {drawWinLine(50, 304, 558, 304); }
    // X 6, 7, 8 condition
    else if (arrayIncludes("6X", "7X", "8X")) {drawWinLine(50, 508, 558, 508); }
    // X 0, 3, 6 condition
    else if (arrayIncludes("0X", "3X", "6X")) {drawWinLine(100, 50, 100, 558); }
    // X 1, 4, 7 condition
    else if (arrayIncludes("1X", "4X", "7X")) {drawWinLine(304, 50, 304, 558); }
    // X 2, 5, 8 condition
    else if (arrayIncludes("2X", "5X", "8X")) {drawWinLine(508, 50, 508, 558); }
    // X 6, 4, 2 condition
    else if (arrayIncludes("6X", "4X", "2X")) {drawWinLine(100, 508, 510, 90); }
    // X 0, 4, 8 condition
    else if (arrayIncludes("0X", "4X", "8X")) {drawWinLine(100, 100, 520, 520); }

    // O 0, 1, 2 condition.
    else if (arrayIncludes("0O", "1O", "2O")) {drawWinLine(50, 100, 558, 100); }
    // O 3, 4, 5 condition
    else if (arrayIncludes("3O", "4O", "5O")) {drawWinLine(50, 304, 558, 304); }
    // O 6, 7, 8 condition
    else if (arrayIncludes("6O", "7O", "8O")) {drawWinLine(50, 508, 558, 508); }
    // O 0, 3, 6 condition
    else if (arrayIncludes("0O", "3O", "6O")) {drawWinLine(100, 50, 100, 558); }
    // O 1, 4, 7 condition
    else if (arrayIncludes("1O", "4O", "7O")) {drawWinLine(304, 50, 304, 558); }
    // O 2, 5, 8 condition
    else if (arrayIncludes("2O", "5O", "8O")) {drawWinLine(508, 50, 508, 558); }
    // O 6, 4, 2 condition
    else if (arrayIncludes("6O", "4O", "2O")) {drawWinLine(100, 508, 510, 90); }
    // O 0, 4, 8 condition
    else if (arrayIncludes("0O", "4O", "8O")) {drawWinLine(100, 100, 520, 520); }

    //This condition checks for a tie. If none of the above conditions register
    // and 9 squares are selected, the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio("./Media/tie.mp3");
        //This function sets a .3 second timer before the reset game is called.
        setTimeout(function () { resetGame(); }, 1000);
    }

    //This function checks if an array icludes 3 strings.
    //It is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //The next 2 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If the 3 variables we pass are all incldued in our array true is 
        //returned and our else if condition executes the drawWinLine function.
        if (a === true && b === true && c === true) {console.log(squareA, squareB, squareC); return true;}
    }
}

//This function makes our body element temporarily unclickable.
function disableClick() {
    //This makes our body unclickable.
    body.style.pointerEvents = "none";
    //This makes our body clickable again after 1 second.
    setTimeout(function() {body.style.pointerEvents = "auto";}, 1000);
}

//This function takes a string parameter of the path you set earlier for 
// playing a sound
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}

//This function utilizaes html canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses our html canvas element.
    const canvas = document.getElementById("win-lines");
    //This line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext("2d");
    //This line indicates where the start of a line's x axis is.
    let x1 = coordX1,
        //this line indicates where the start of a line's y axis is.
        y1 = coordY1,
        //this line indicates where the end of a line's x axis is.
        x2 = coordX2,
        //This line indicates where the end of a line's y axis is.
        y2 = coordY2,
        //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
        //This variable stores temporary y axis data we update in our animation loop.
        y = y1;

        //This function interacts with the canvas
        function animateLineDrawing() {
            //This variable creates the loop for when the game ends it restarts.
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            //This method clears content from the last loop iteration.
            c.clearRect(0, 0, 608, 608);
            //This method starts a new path
            c.beginPath();
            //This method moves us to a starting point for our line.
            c.moveTo(x1, y1);
            //This method indicates the end point in our line.
            c.lineTo(x, y);
            //This method set the width of our line.
            c.lineWidth = 10;
            //This method sets the color of our line.
            c.strokeStyle = "rgba(70, 266, 44, .8)";
            //This method draws everything we laid out above.
            c.stroke();
            //This condition checks if we've reached the endpoint.
            if (x1 <= x2 && y1 <= y2) {
                //This condition adds 10 to the previous end x point.
                if (x < x2) { x += 10; }
                //This condition adds 10 to the previous end y point.
                if (y < y2) { y += 10; }
                //This condition cancels our animation loop if we reach the end points.
                if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
            }

            //This condition is similar to the one above.
            //it was necessary for the 6, 4, 2 win condition.
            if (x1 <= x2 && y1 >= y2) {
                if (x < x2) { x += 10; }
                if (y > y2) { y -= 10; }
                if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
            }
        }

        //This function clears our cnavas after our win line is drawn.
        function clear() {
            //This line starts our animation loop.
            const animationLoop = requestAnimationFrame(clear);
            //This line clears our canvas.
            c.clearRect(0, 0, 608, 608);
            //This line stops our animation loop.
            cancelAnimationFrame(animationLoop);
        }

        //This line disallows clicking while the win sound is playing
        disableClick();
        //This line plays the win sounds.
        audio("./media/winGame.mp3");
        //This line calls our main animation loop.
        animateLineDrawing();
        //This line waits 1 second.
        //Then, clears canvas, resets game, and allows clicking again.
        setTimeout(function () { clear(); resetGame(); }, 1000);
}

//This function resets teh game in a tie or a win.
function resetGame() {
    //THis for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //This variable get the html element of i
        let square = document.getElementById(String(i));
        //This removes our elements backgroundImage
        square.style.backgroundImage="";
    }
    //This resets our array so it is empty and we can start over.
    selectedSquares = [];
}