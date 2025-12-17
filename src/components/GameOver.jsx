export default function GameOver({winner, gameBoard}){
	let boardFilled = false;
	let gameOver=
		<div id="game-over">
			<p>Game Over</p>
			<button>Restart</button>
		</div>;
	return (
		<>
			{winner && gameOver}
		</>	
	);
}