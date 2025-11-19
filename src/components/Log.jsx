export default function Log({turns}){

	return <ol id="log">
		{turns.map((turn, colIndex)=>(
			<li key={`${turn.square.row}${turn.square.col}`}>
				Player: {turn.player}
				Index: {turn.square.row}, {turn.square.col}
			</li>
		))}
	</ol>
}
