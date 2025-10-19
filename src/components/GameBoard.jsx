import {useState} from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({onTriggerActivePlayer, activeSymbol}){
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handleClick(rowIndex, colIndex){
		setGameBoard((prevGameBoard) => {
			const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
			newGameBoard[rowIndex][colIndex] = activeSymbol;
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