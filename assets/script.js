// set grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

// get the container element
var gameBoardContainer = document.getElementById("game-board");

// make the grid columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		// create a new div HTML element for each grid square and make it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

        // give each div element a unique id based on its row and column, like "s00"
		square.id = 's' + j + i;			
		
		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		
		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}

// Create a score system to show when youve won
var totalHits = "0"


// add both of these to the actual game function to call these functions as the if statements are included in main game function
function gamesWon() {
    if (totalHits = "17") {
        alert('You have destroyed all battleships, You WON!')
	    let score = parseInt(document.getElementById("games-won").innerText);

	    gameWon = document.getElementById("games-won").style.color = Green
        gameWon.innerText = ++score;
        
    } 
}

// 
function gameLost() {
    if (clicks > 50) {
        alert('You have launched all Torpedos, Game Over!')
        let score = parseInt(document.getElementById("games-lost").innerText);

	    gameLost = document.getElementById("games-lost").style.color = Red
        gameLost.innerText = ++score;
    }
}

/* Simple way to know if you have won, is to add up the total amount of hits to destroy all ships on the board
and then once that number is reached the game ends. (i would like to change this in the future and have it show when
a certain ship type has been destroyed.)
      Aircraft Carrier - 5 hits
      Battleship       - 4 hits
      Destroyer        - 3 hits
      Submarine        - 3 hits
      Frigate          - 2 hits
*/

// Static Gameboard layout * look at randomising this
var gameBoard = [
				[0,0,0,1,1,1,1,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[0,0,0,0,0,0,1,0,0,0],
				[1,0,0,0,0,0,1,1,1,1],
				[1,0,0,0,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,1,0,0,0,0,0,0],
				[1,0,0,0,0,0,0,0,0,0]
				]

// set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
gameBoardContainer.addEventListener("click", fireTorpedo, false);