export default function GameOver({winner, resetGame, players}){
	
	console.log(players[winner]);
	let gameOver=
		<div id="game-over">
			{winner ? <p>Game Over</p> : <p>It's a draw</p>}
			{winner && <p>You win {players[winner]}</p>}
			<button onClick={resetGame}>Restart</button>
		</div>;
	return (
		<>
			{gameOver}
		</>	
	);
}