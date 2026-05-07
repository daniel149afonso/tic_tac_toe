import type { PlayerSymbol, Players } from "../types";

type GameOverProps = {
  winner: PlayerSymbol | undefined;
  resetGame: () => void;
  players: Players;
};

export default function GameOver({ winner, resetGame, players }: GameOverProps) {

  console.log(winner && players[winner]);
  const gameOver =
    <div id="game-over">
      {winner ? <p>Game Over</p> : <p>It's a draw</p>}
      {winner && <p>{players[winner]} won</p>}
      <button onClick={resetGame}>Restart</button>
    </div>;

  return (
    <>
      {gameOver}
    </>
  );
}
