import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
	const [activePlayer, setActivePlayer] = useState("X");

	function handleACtivePlayer(){
		setActivePlayer((symbol)=> symbol === "X" ? "O" : "X");
	}
	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player initialName={"Player 1"} symbol="X"/>
					<Player initialName={"Player 2"} symbol="O"/>
				</ol>
				<GameBoard onTriggerActivePlayer={handleACtivePlayer}/>
			</div>
			<p>{activePlayer}</p>
		</main>
	);
}

export default App
