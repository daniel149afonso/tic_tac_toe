import {useState} from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null]
];

export default function GameBoard(){
	//const [symbol, setSymbol] = useState();
	const [state, setState] = useState("");
	let symbol = "";
	function handleClick(){
		setState(state=>!state);
	}
	return <ol id="game-board">
		{initialGameBoard.map((row, rowIndex)=><li key={rowIndex}>
			<ol>
				{row.map((playerSymbol, colIndex)=>(
					<li key={colIndex}>
						<button onClick={handleClick}>{playerSymbol}</button>
					</li>
			))}
			</ol>
		</li>)}
	</ol>;
}