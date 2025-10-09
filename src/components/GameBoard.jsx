import {useState} from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard(){
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handleClick(rowIndex, colIndex){
		setGameBoard((prevGameBoard) => {
			let newGameBoard = {...prevGameBoard.map(innerArray => [...innerArray])};
			newGameBoard[rowIndex][colIndex] = "X";
			return (newGameBoard);
		});
	}
	return (<ol id="game-board">
		{initialGameBoard.map((row, rowIndex)=><li key={rowIndex}>
			<ol>
				{row.map((playerSymbol, colIndex)=>(
					<li key={colIndex}>
						<button onClick={() => handleClick(rowIndex, colIndex)}>{playerSymbol}</button>
					</li>
			))}
			</ol>
		</li>)}
	</ol>);
}