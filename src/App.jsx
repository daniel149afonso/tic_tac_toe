import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
	const [activePlayer, setactivePlayer] = useState("X");

	return (
		<main>
			<div id="game-container">
				<ol id="players">
					<Player initialName={"Player 1"} symbol="X"/>
					<Player initialName={"Player 2"} symbol="O"/>
				</ol>
				<GameBoard/>
			</div>
		</main>
	);
}

export default App
