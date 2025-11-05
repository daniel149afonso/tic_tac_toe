const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({onTriggerActivePlayer, turns}){
	let gameBoard = initialGameBoard;
	//to add comments
	for (const turn of turns) {
		const {square, player} = turn;
		const {row, col} = square;

		gameBoard[row][col] = player;
	}

	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handleClick(rowIndex, colIndex){
	// 	setGameBoard((prevGameBoard) => {
	// 		const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
	// 		newGameBoard[rowIndex][colIndex] = activeSymbol;
	// 		return (newGameBoard);
	// 	});
	// 	onTriggerActivePlayer();
	// }


	return (

	<ol id="game-board">
		{gameBoard.map((row, rowIndex) => (
		<li key={rowIndex}>
			<ol>
				{row.map((playerSymbol, colIndex)=>(
					<li key={colIndex}>
						<button onClick={() => onTriggerActivePlayer(rowIndex, colIndex)}>{playerSymbol}</button>
					</li>
				))}
			</ol>
		</li>))}
	</ol>);
}