import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning_list_items.js";

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
				<GameBoard onTriggerActivePlayer={handleActivePlayer} turns={gameTurns}/>
			</div>
			<Log turns={gameTurns}/>
		</main>
	);
}

export default App
