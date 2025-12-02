export default function GameBoard({onTriggerActivePlayer, board}){
	return (
	<ol id="game-board">
		{board.map((row, rowIndex) => (
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