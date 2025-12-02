import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning_combinations.js";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gameTurns){
	let currentPlayer = "X";
	if (gameTurns.length > 0 && gameTurns[0].player === "X")
		currentPlayer = "O";
	return currentPlayer;
}

function App() {
	// State that stores all the turns that have been played so far
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = deriveActivePlayer(gameTurns);

	let gameBoard = initialGameBoard;
	//Fill the array with the player historic
	for (const turn of gameTurns) {
		// turn = un coup dans la liste
		const {square, player} = turn;
		const {row, col} = square;
		gameBoard[row][col] = player;
	}

	let winner = null;
	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];

		if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
			winner = firstSquareSymbol;
	}

	// Function that switches the active player after a move is made
	function handleActivePlayer(rowIndex, colIndex) {
		// Save the played turn and who played X or O
		setGameTurns(prevTurns => {
			const currentPlayer = deriveActivePlayer(prevTurns);
			const updatedTurns = [
				{square: {row: rowIndex, col: colIndex}, player: currentPlayer},
				...prevTurns,
			];
			return (updatedTurns);
		});
	}
	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player initialName={"Player 1"} symbol="X" activeSymbol={gameTurns.player === "X"}/>{/*return a boolean true or false is active or not*/}
					<Player initialName={"Player 2"} symbol="O" activeSymbol={gameTurns.player === "O"}/>
				</ol>
				{winner && <p>You win {winner}!</p>}
				<GameBoard onTriggerActivePlayer={handleActivePlayer} board={gameBoard}/>
			</div>
			<Log turns={gameTurns}/>
		</main>
	);
}

export default App
