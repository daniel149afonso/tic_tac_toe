import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";

function App() {

	// State that stores all the turns that have been played so far
	const [gameTurns, setGameTurns] = useState([]);
	
	// State that keeps track of which player's turn it currently is: "X" or "O"
	const [activePlayer, setActivePlayer] = useState("X");

	// Function that switches the active player after a move is made
	function handleActivePlayer(rowIndex, colIndex) {
		setActivePlayer(symbol => symbol === "X" ? "O" : "X");
		// Save the played turn and who played X or O
		setGameTurns(prevTurns => {
			let currentPlayer = "X";

			if (prevTurns.length > 0 && prevTurns[0].player === "X")
				currentPlayer = "O";
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
