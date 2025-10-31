import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {

	// State that stores all the turns that have been played so far
	const [gameTurns, setGameTurns] = useState([]);
	
	// State that keeps track of which player's turn it currently is: "X" or "O"
	const [activePlayer, setActivePlayer] = useState("X");

	// Function that switches the active player after a move is made
	function handleActivePlayer(rowIndex, colIndex){
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
					<Player initialName={"Player 1"} symbol="X" activeSymbol={activePlayer === "X"}/>{/*return a boolean true or false is active or not*/}
					<Player initialName={"Player 2"} symbol="O" activeSymbol={activePlayer === "O"}/>
				</ol>
				<GameBoard onTriggerActivePlayer={handleActivePlayer} activeSymbol={activePlayer}/>
			</div>
			<Log/>
			<p>{activePlayer}</p>
		</main>
	);
}

export default App
