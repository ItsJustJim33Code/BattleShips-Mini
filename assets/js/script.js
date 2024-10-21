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



// Event listener to handle user clicks when interacting with the game
document.addEventListener("DOMContentLoaded", function () {
	let buttons = document.getElementsByTagName("button");

	for (let button of buttons) {
		button.addEventListener("click", function () {
			if (this.getAttribute("data-type") === "reset") {
				resetGame();
				//alert('You clicked the restart button')
			} else {
				let gameDifficulty = this.getAttribute("data-type");
				selectDifficulty(gameDifficulty);
			}
		});
	}
	// Select Default Difficulty
	selectDifficulty("easy");
})


// Create a score system to show you game info
var torpedosHit = "0"
var torpedosLeft = document.getElementById('torpedos-left').innerText


// Function that resets the game
function resetGame() {
	// Refresh the page
	location.reload();
}

// Function that Increments score for each succesful ship hit
function incrementScore() {

	let torpedosHit = parseInt(document.getElementById("torpedos-hit").innerText);
	document.getElementById("torpedos-hit").innerText = ++torpedosHit;

	if (torpedosHit == 17) {
		gamesWon()
	}
}

// Function that Decrements score for each torpedo fired except sqaures that have already been fired at
function decrementScore() {
	let torpedosLeft = parseInt(document.getElementById("torpedos-left").innerText);
	document.getElementById("torpedos-left").innerText = --torpedosLeft;

	if (torpedosLeft == 0) {
		gamesLost()
	}
}

// Function to set the Game difficulty 
function selectDifficulty(gameDifficulty) {

	if (gameDifficulty === "easy") {
		document.getElementById('torpedos-left').innerText = "50"
	} else if (gameDifficulty === "medium") {
		document.getElementById('torpedos-left').innerText = "40"
	} else if (gameDifficulty === "hard") {
		document.getElementById('torpedos-left').innerText = "30"
	} else if (gameDifficulty === "impossible") {
		document.getElementById('torpedos-left').innerText = "20"
	} else {
		alert(`Unknown game type ${gameDifficulty}`);
		throw `Unknown game type ${gameDifficulty}, aborting!`;
	}
}



// Function to determine when the game is won! 
function gamesWon() {

	alert('You have destroyed all battleships, You WON!')
	let score = parseInt(document.getElementById("games-won").innerText);

	document.getElementById("games-won").innerText = ++score;
	document.getElementById("games-won").style.color = 'green'

}

// Function to determine when the game is over!
function gamesLost() {
	alert('You have launched all Torpedos, Game Over!')
	let score = parseInt(document.getElementById("games-lost").innerText);

	document.getElementById("games-lost").innerText = ++score;
	score = document.getElementById("games-lost").style.color = 'red'
}

/* Simple way to know if you have won, is to add up the total amount of hits to destroy all ships on the board
and then once that number is reached the game ends. (i would like to create draggable options in the future to represent ships and relay that
information back to the user.)
      Aircraft Carrier - 5 hits
      Battleship       - 4 hits
      Destroyer        - 3 hits
      Submarine        - 3 hits
      Frigate          - 2 hits
*/

// Static Gameboard layout * look at randomising this
var gameBoard = [
	[0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

// set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
gameBoardContainer.addEventListener("click", fireTorpedo, false);

// source code from http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
function fireTorpedo(event) {
	// 
	if (event.target !== event.currentTarget) {
		// extract row and column # from the HTML element's id
		var row = event.target.id.substring(1, 2);
		var col = event.target.id.substring(2, 3);

		// Changes colour of the board to represent hit or miss
		if (gameBoard[row][col] == 0) {
			event.target.style.background = '#bbb';
			// set this square's value to 3 to indicate that they fired and missed
			gameBoard[row][col] = 3;

			// Decrement torpedos launched by 1
			decrementScore()

			// Changes colour of the board to represent hit to red
		} else if (gameBoard[row][col] == 1) {
			event.target.style.background = 'red';
			// set this square's value to 2 to indicate the ship has been hit
			gameBoard[row][col] = 2;

			// increment hitCount each time a ship is hit
			incrementScore()

			// Decrement torpedos launched by 1
			decrementScore()

			// Notify player when he has clicked on a previously clicked square
		} else if (gameBoard[row][col] > 1) {
			alert("You've already fired at this location, please dont miss again sailor!");
		}
	}
}