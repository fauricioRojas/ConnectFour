var game = [
			[-1, -1, -1, -1, -1, -1, -1],
			[-1, -1, -1, -1, -1, -1, -1],
			[-1, -1, -1, -1, -1, -1, -1],
			[-1, -1, -1, -1, -1, -1, -1],
			[-1, -1, -1, -1, -1, -1, -1],
			[-1, -1, -1, -1, -1, -1, -1]
		   ],
    currentPlayer = 1;

function addEventsListener() {
	document.getElementById('column-0-0').addEventListener("click", validateFirstColumn);
	document.getElementById('column-0-1').addEventListener("click", validateSecondColumn);
	document.getElementById('column-0-2').addEventListener("click", validateThirdColumn);
	document.getElementById('column-0-3').addEventListener("click", validateFourthColumn);
	document.getElementById('column-0-4').addEventListener("click", validateFifthColumn);
	document.getElementById('column-0-5').addEventListener("click", validateSixthColumn);
	document.getElementById('column-0-6').addEventListener("click", validateSeventhColumn);
}

function removeEventsListener() {
	var column1 = document.getElementById('column-0-0'),
		column2 = document.getElementById('column-0-1'),
		column3 = document.getElementById('column-0-2'),
		column4 = document.getElementById('column-0-3'),
		column5 = document.getElementById('column-0-4'),
		column6 = document.getElementById('column-0-5'),
		column7 = document.getElementById('column-0-6');

	column1.removeEventListener("click", validateFirstColumn);
	column2.removeEventListener("click", validateSecondColumn);
	column3.removeEventListener("click", validateThirdColumn);
	column4.removeEventListener("click", validateFourthColumn);
	column5.removeEventListener("click", validateFifthColumn);
	column6.removeEventListener("click", validateSixthColumn);
	column7.removeEventListener("click", validateSeventhColumn);

	column1.style.cursor = 'default';
	column2.style.cursor = 'default';
	column3.style.cursor = 'default';
	column4.style.cursor = 'default';
	column5.style.cursor = 'default';
	column6.style.cursor = 'default';
	column7.style.cursor = 'default';
}

function printGame() {
	var i = 0,
	    j = 0,
	    totalRows = game.length,
	    totalColumns = game[0].length;

	for ( ; i < totalRows; i++) {
		for ( ; j < totalColumns; j++) {
			// Red player.
			if (game[i][j] === 1) {
				document.getElementById('column-' + i + '-' + j).style.backgroundImage = "url('./images/red.png')";
			}
			// Black player.
			else if (game[i][j] === 2) { 
				document.getElementById('column-' + i + '-' + j).style.backgroundImage = "url('./images/black.png')";
			}
			// Empty.
			else {
				document.getElementById('column-' + i + '-' + j).style.backgroundImage = "url('./images/empty.png')";
			}
		}

		j = 0;	
	}
}

function changeTurn() {
	currentPlayer = (currentPlayer % 2) + 1;
}

function printTurnUI() {
	// Red player;
	if (currentPlayer === 1) {
		document.getElementById('current-player').className = 'red-player';
	}
	// Black player.
	else {
		document.getElementById('current-player').className = 'black-player';
	}
}

function showWinner() {
	// Red player;
	if (currentPlayer === 1) {
		document.getElementById('winner-player').className = 'red-player';
	}
	// Black player.
	else {
		document.getElementById('winner-player').className = 'black-player';
	}

	document.getElementById('current-turn-box').style.visibility = 'hidden';
	document.getElementById('winner-box').style.visibility = 'visible';
}

/* #############################################################################################################
Validate zone starts winner
############################################################################################################# */
function validateDiagonalBottomRight(row, column) {
	if (row < 3 && column < 4) {
		if (game[row][column] === currentPlayer && game[row + 1][column + 1] === currentPlayer
			&& game[row + 2][column + 2] === currentPlayer && game[row + 3][column + 3] === currentPlayer) {
			console.log(row, column, row + 1, column + 1, row + 2, column + 2, row + 3, column + 3);
			return true;
		}
	}

	return false;
}
function validateDiagonalBottomLeft(row, column) {
	if (row < 3 && column > 2) {
		if (game[row][column] === currentPlayer && game[row + 1][column - 1] === currentPlayer
			&& game[row + 2][column - 2] === currentPlayer && game[row + 3][column - 3] === currentPlayer) {
			console.log(row, column,row + 1, column - 1, row + 2, column - 2, row + 3, column - 3);
			return true;
		}
	}

	return false;
}
function validateDiagonalTopRight(row, column) {
	if (row > 2 && column < 4) {
		if (game[row][column] === currentPlayer && game[row - 1][column + 1] === currentPlayer
			&& game[row - 2][column + 2] === currentPlayer && game[row - 3][column + 3] === currentPlayer) {
			console.log(row, column, row - 1, column + 1, row - 2, column + 2, row - 3, column + 3);
			return true;
		}
	}

	return false;
}
function validateDiagonalTopLeft(row, column) {
	if (row > 2 && column > 2) {
		if (game[row][column] === currentPlayer && game[row - 1][column - 1] === currentPlayer
			&& game[row - 2][column - 2] === currentPlayer && game[row - 3][column - 3] === currentPlayer) {
			console.log(row, column, row - 1, column - 1, row - 3, column - 3, row - 3, column - 3);
			return true;
		}
	}

	return false;
}
function validateTop(row, column) {
	if (row > 2) {
		if (game[row][column] === currentPlayer && game[row - 1][column] === currentPlayer
			&& game[row - 2][column] === currentPlayer && game[row - 3][column] === currentPlayer) {
			console.log(row, column, row - 1, column, row - 2, column, row - 3, column);
			return true;
		}
	}

	return false;
}
function validateBottom(row, column) {
	if (row < 3) {
		if (game[row][column] === currentPlayer && game[row + 1][column] === currentPlayer
			&& game[row + 2][column] === currentPlayer && game[row + 3][column] === currentPlayer) {
			console.log(row, column, row + 1, column, row + 2, column, row + 3, column);
			return true;
		}
	}

	return false;
}
function validateLeft(row, column) {
	if (column > 2) {
		if (game[row][column] === currentPlayer && game[row][column - 1] === currentPlayer
			&& game[row][column - 2] === currentPlayer && game[row][column - 3] === currentPlayer) {
			console.log(row, column, row, column - 1, row, column - 2, row, column - 3);
			return true;
		}
	}

	return false;
}
function validateRight(row, column) {
	if (column < 4) {
		if (game[row][column] === currentPlayer && game[row][column + 1] === currentPlayer
			&& game[row][column + 2] === currentPlayer && game[row][column + 3] === currentPlayer) {
			console.log(game[row][column], game[row][column + 1], game[row][column + 2], game[row][column + 3]);
			return true;
		}
	}

	return false;
}

function isEndedGame() {
	var i = 0,
	    j = 0,
	    totalRows = game.length,
	    totalColumns = game[0].length;

	for ( ; i < totalRows; i++) {
		for ( ; j < totalColumns; j++) {
			if (game[i][j] > 0) {
				if (validateTop(i, j) || validateRight(i, j) || validateBottom(i, j) || validateLeft(i, j)
					|| validateDiagonalTopLeft(i, j) || validateDiagonalTopRight(i, j)
					|| validateDiagonalBottomLeft(i, j) || validateDiagonalBottomRight(i, j)) {
					return true;
				}
			}
		}

		j = 0;	
	}

	return false;
}
/* #############################################################################################################
Validate zone ends winner
############################################################################################################# */

function makeMovement(row, column) {
	game[row][column] = currentPlayer;
}

function canPlay(column) {
	var i = game.length - 1;

	for ( ; 0 <= i; i--) {
		if (game[i][column] == -1) {
			return i;
		}
	}

	return -1;
}

function boss(column) {
	var row = canPlay(column);

	if (row >= 0) {
		makeMovement(row, column);
		printGame();

		if (isEndedGame()) {
			removeEventsListener();
			showWinner();
		}
		else {
			changeTurn();
			printTurnUI();
		}
	}
}

function validateFirstColumn() {
	boss(0);
}

function validateSecondColumn() {
	boss(1);
}

function validateThirdColumn() {
	boss(2);
}

function validateFourthColumn() {
	boss(3);
}

function validateFifthColumn() {
	boss(4);
}

function validateSixthColumn() {
	boss(5);
}

function validateSeventhColumn() {
	boss(6);
}

printGame();
addEventsListener();
printTurnUI();