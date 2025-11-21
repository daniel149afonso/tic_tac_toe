export default function Log({turns}){

	return <ol id="log">
		{turns.map((turn, colIndex)=>(
			<li key={`${turn.square.row}${turn.square.col}`}>
				<p>
					Player: {turn.player + ", "}
					Index: {turn.square.row}, {turn.square.col}
				</p>
			</li>
		))}
	</ol>
}
