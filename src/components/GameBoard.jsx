import {useState} from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
//Example copy array shallow copy
const fruits = ["banana", "apple"];
const fav = [...fruits];
fruits[0] = "orange";
console.log("Fruit:", fruits[0]);
//END Example
export default function GameBoard({onTriggerActivePlayer}){
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handleClick(rowIndex, colIndex){
		setGameBoard((prevGameBoard) => {
			const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
			newGameBoard[rowIndex][colIndex] = "X";
			return (newGameBoard);
		});
		onTriggerActivePlayer();
	}
	return (
	
	<ol id="game-board">
		{gameBoard.map((row, rowIndex) => (
		<li key={rowIndex}>
			<ol>
				{row.map((playerSymbol, colIndex)=>(
					<li key={colIndex}>
						<button onClick={() => handleClick(rowIndex, colIndex)}>{playerSymbol}</button>
					</li>
				))}
			</ol>
		</li>))}
	</ol>);
}