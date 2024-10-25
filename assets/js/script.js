// Set grid rows and columns and the size of each square
var rows = 10;
var cols = 10;
var squareSize = 50;

// Get the container element
var gameBoardContainer = document.getElementById("game-board");

/**
 * Clears the board of the divs that were created (Used code supplied by ChatGPT using the following question ("how can i make sure that this code belows first removes all the divs it creates and then rebuilds the divs after"))
 */
function clearBoard() {
    // Remove all child elements from the container
    while (gameBoardContainer.firstChild) {
        gameBoardContainer.removeChild(gameBoardContainer.firstChild);
    }
}

/**
 * Function to create the grid squares again using divs 10x10 and creates the game board (Used code supplied by ChatGPT using the following question ("how can i make sure that this code belows first removes all the divs it creates and then rebuilds the divs after"))
 */
function buildGrid() {
    // Make the grid columns and rows
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            // Create a new div HTML element for each grid square and make it the right size
            var square = document.createElement("div");
            gameBoardContainer.appendChild(square);

            // Give each div element a unique id based on its row and column, like "s00"
            square.id = 's' + j + i;

            // Set each grid square's coordinates: multiples of the current row or column number
            var topPosition = j * squareSize;
            var leftPosition = i * squareSize;

            // Use CSS absolute positioning to place each grid square on the page
            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';
        }
    }
}

// Clears the board on page refresh
clearBoard();
// Builds the grid squares of divs to create the game board
buildGrid();



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
	// Selects Default Difficulty
	selectDifficulty("easy");
})


// Create a score system to show you game info
var torpedosHit = "0"
var torpedosLeft = document.getElementById('torpedos-left').innerText


/**
 * Function that resets the game by refreshing the page(However this is not ideal and will be changed to simply reset the board)
 */
function resetGame() {
	// Recreates the game board
	clearBoard();
	buildGrid();

	boardRows = 10;
	boardCols = 10;
	blockLengths = [5, 4, 3, 3, 2]; // Define the sizes of the groups of 1s

	gameBoard = createGameBoard(boardRows, boardCols, blockLengths);
	console.log(gameBoard);

	// when resetGame() is used it uses the default game mode and sets the html element back to 0
	selectDifficulty("easy")
	document.getElementById('torpedos-hit').innerText = 0
}

/**
 * Function that Increments score for each succesful ship hit and adds it to torpedosHit Variable
 */
function incrementScore() {

	let torpedosHit = parseInt(document.getElementById("torpedos-hit").innerText);
	document.getElementById("torpedos-hit").innerText = ++torpedosHit;

	if (torpedosHit == 17) {
		gamesWon()
	}
}

/**
 * Function that Decrements score for each torpedo fired except sqaures that have already been fired at and decrements it from the torpedosLeft variable
 */
function decrementScore() {
	let torpedosLeft = parseInt(document.getElementById("torpedos-left").innerText);
	document.getElementById("torpedos-left").innerText = --torpedosLeft;

	if (torpedosLeft == 0) {
		gamesLost()
	}
}

/**
 * Function to set the Game difficulty and sets how many torpedosLeft for the player to use to win the game
 */
function selectDifficulty(gameDifficulty) {

	if (gameDifficulty === "easy") {
		document.getElementById('torpedos-left').innerText = "50"
		document.getElementById('reset').click();
	} else if (gameDifficulty === "medium") {
		resetGame();
		document.getElementById('torpedos-left').innerText = "40"
	} else if (gameDifficulty === "hard") {
		resetGame();
		document.getElementById('torpedos-left').innerText = "30"
	} else if (gameDifficulty === "impossible") {
		resetGame();
		document.getElementById('torpedos-left').innerText = "20"
	} else {
		alert(`Unknown game type ${gameDifficulty}`);
		throw `Unknown game type ${gameDifficulty}, aborting!`;
	}
}



/**
 * Function to determine when the game is won! displaying an alert to the user and updating the games-won text in the HTML file
 */
function gamesWon() {

	alert('You have destroyed all battleships, You WON!')
	let score = parseInt(document.getElementById("games-won").innerText);

	document.getElementById("games-won").innerText = ++score;
	document.getElementById("games-won").style.color = 'green'

	resetGame()
}

/**
 * Function to determine when the game is over! displaying an alert to the user and updating the games-lost text in the HTML file
 */
function gamesLost() {
	alert('You have launched all Torpedos, Game Over!')
	let score = parseInt(document.getElementById("games-lost").innerText);

	document.getElementById("games-lost").innerText = ++score;
	score = document.getElementById("games-lost").style.color = 'red'

	resetGame()
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

/* Static Gameboard layout * look at randomising this
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


// Creates Gameboard that randomises the where the ships will be placed (ChatGPT for the base code used here with following question "how can i randomise this array while making sure that i have 1s in a row of certain lengths"
// + static gameboard above + can i define the sizes of the groups of 1s in a variable and assign those to the board and then fill with 0s?")
*/
/**
 * Creates an array with randomised groups of 1 of a certain length, adds this to the array and fills the remaining spaces with 0s
 * @blockLengths variable defines the sizes of the groups of 1s and can be changed when required.
 */
function createGameBoard(rows, cols, blockLengths) {
    const gameBoard = Array.from({ length: rows }, () => Array(cols).fill(0));

    // Helper function to place blocks of 1s
    function placeBlock(length) {
        let placed = false;
        while (!placed) {
            // Choose a random row
            const row = Math.floor(Math.random() * rows);
            // Choose a random starting column
            const startCol = Math.floor(Math.random() * (cols - length + 1));

            // Check if the block can be placed
            let canPlace = true;
            for (let k = 0; k < length; k++) {
                if (gameBoard[row][startCol + k] === 1) {
                    canPlace = false;
                    break;
                }
            }

            // Place the block if possible
            if (canPlace) {
                for (let k = 0; k < length; k++) {
                    gameBoard[row][startCol + k] = 1;
                }
                placed = true;
            }
        }
    }

    // Place all blocks defined in blockLengths
    blockLengths.forEach(length => placeBlock(length));

    return gameBoard;
}

// Example usage
let boardRows = 10;
let boardCols = 10;
let blockLengths = [5, 4, 3, 3, 2]; // Define the sizes of the groups of 1s

let gameBoard = createGameBoard(boardRows, boardCols, blockLengths);
console.log(gameBoard);

// set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
gameBoardContainer.addEventListener("click", fireTorpedo, false);

// source code from http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
/**
 * Main function of that game that records the clicks within the gameboard divs and changes colors of the divs square to represent hits, misses
 * This function also includes the other functions such as incrementScore(), decrementScore(), gamesWon() and gamesLost()
 */
function fireTorpedo(event) {
	// 
	if (event.target !== event.currentTarget) {
		// extract row and column # from the HTML element's id
		var row = event.target.id.substring(1, 2);
		var col = event.target.id.substring(2, 3);

		// Changes colour of the board to represent hit or miss
		if (gameBoard[row][col] == 0) {
			event.target.style.background = '#bbb';
			event.target.innerText = "X"
			// set this square's value to 3 to indicate that they fired and missed
			gameBoard[row][col] = 3;

			// Decrement torpedos launched by 1
			decrementScore()

			// Changes colour of the board to represent hit to red
		} else if (gameBoard[row][col] == 1) {
			event.target.style.background = 'red';
			event.target.innerText = "Y"
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