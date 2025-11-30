const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

export default function GameBoard({onTriggerActivePlayer, turns}){
	let gameBoard = initialGameBoard;
	//Remplit le tableau avec l'historique des joueurs
	for (const turn of turns) {
	// turn = un coup dans la liste
	const square = turn.square; // ex: {row:0, col:1}
	const player = turn.player; // ex: "X"
	const row = square.row; // 0
	const col = square.col; // 1
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