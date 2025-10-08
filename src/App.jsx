import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
	const [player1, setPlayer1] = useState("Player 1");
	const [player2, setPlayer2] = useState("Player 2");
	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player  initialName={"Player 1"} symbol="X"/>
					<Player  initialName={"Player 2"} symbol="O"/>
				</ol>
				<GameBoard/>
			</div>
		</main>
	);
}

export default App
