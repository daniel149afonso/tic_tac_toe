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
	return (
	<ol id="game-board">
		{gameBoard.map((row, rowIndex) => (
		<li key={rowIndex}>
			<ol>
				{row.map((playerSymbol, colIndex)=>(
					<li key={colIndex}>
						<button onClick={() => onTriggerActivePlayer(rowIndex, colIndex)}
							disabled={playerSymbol !== null}>{playerSymbol}
						</button>
					</li>
				))}
			</ol>
		</li>))}
	</ol>);
}