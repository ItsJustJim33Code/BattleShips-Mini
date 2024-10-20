// set event listener for all elements on game-board, launches torpedo when square is clicked
gameBoardContainer.addEventListener("click", launchTorpedo, false);

// Set the grid size to put the "ships" and sizes of the squares



// Records hits and missing within this variable
let gameBoard = ""

// Create a score system to show when youve won
var totalHits = "0"

/* Simple way to know if you have won, is to add up the total amount of hits to destroy all ships on the board
and then once that number is reached the game ends. (i would like to change this in the future and have it show when
a certain ship type has been destroyed.)
      Aircraft Carrier - 5 hits
      Battleship       - 4 hits
      Destroyer        - 3 hits
      Submarine        - 3 hits
      Frigate          - 2 hits
*/

// Randomises Ship locations on the gameboard
function createRandomShips() {

}

function launchTorpedo() {

}