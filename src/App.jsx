import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
	const [activePlayer, setActivePlayer] = useState("X");

	function handleActivePlayer(){
		setActivePlayer((symbol) => symbol === "X" ? "O" : "X");
	}
	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player initialName={"Player 1"} symbol="X" activeSymbol={activePlayer === "X"}/>
					<Player initialName={"Player 2"} symbol="O" activeSymbol={activePlayer === "O"}/>
				</ol>
				<GameBoard onTriggerActivePlayer={handleActivePlayer} activeSymbol={activePlayer}/>
			</div>
			<p>{activePlayer}</p>
		</main>
	);
}

export default App
