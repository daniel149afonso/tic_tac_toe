import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import GameOver from "./components/GameOver.jsx";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning_combinations.js";

//The board array empty
const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
//Find the active player
function deriveActivePlayer(gameTurns){
	let currentPlayer = "X";
	if (gameTurns.length > 0 && gameTurns[0].player === "X")
		currentPlayer = "O";
	return currentPlayer;
}

function App() {
	// State that stores all the turns that have been played so far
	const [players, setPlayers] = useState({X: "Player 1", O: "Player 2"});
	const [gameTurns, setGameTurns] = useState([]);
	const activePlayer = deriveActivePlayer(gameTurns);

	//Deep copy of the array gameBoard and initial are separated array
	let gameBoard = initialGameBoard.map(row => [...row]);
	//Fill the array with the player historic
	for (const turn of gameTurns) {
		// turn = un coup dans la liste
		const {square, player} = turn;
		const {row, col} = square;
		gameBoard[row][col] = player;
	}

	let winner = null;
	for (const combination of WINNING_COMBINATIONS) {
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

		if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
		{
			winner = firstSquareSymbol;
			//DEBUG WINNING COMBINATION
			// console.log("Winner combination: "+ [combination[0].row][combination[0].column]);
			// console.log("Winner combination: "+ [combination[1].row][combination[1].column]);
			// console.log("Winner combination: "+ [combination[2].row][combination[2].column]);
			// console.log("Winner: "+ firstSquareSymbol);
		}
	}	
	
	//Check boolean if the game is a draw return true if the condition is true
	const hasDraw = gameTurns.length === 9 && !winner;
	
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
	//Reset the array turns and start a new game
	function resetGame(){
		setGameTurns([]);
	}
	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player initialName={"Player 1"} symbol="X" activeSymbol={activePlayer === "X"} setPlayers = {setPlayers} players={players}/>{/*return a boolean true or false is active or not*/}
					<Player initialName={"Player 2"} symbol="O" activeSymbol={activePlayer === "O"} setPlayers = {setPlayers} players={players}/>
				</ol>
				{(winner || hasDraw) && <GameOver winner = {winner} resetGame = {resetGame} players={players}/>}
				<GameBoard onTriggerActivePlayer={handleActivePlayer} board={gameBoard}/>
			</div>
			<Log turns={gameTurns}/>
		</main>
	);
}

export default App
