import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_combinations";
import type { PlayerSymbol, Players, GameTurn, Board } from "./types";

//Players and their symbol
const PLAYERS: Players = { X: "Player 1", O: "Player 2" };

//The board array empty
const INITIAL_GAME_BOARD: Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//Find the active player
function deriveActivePlayer(gameTurns: GameTurn[]): PlayerSymbol {
  let currentPlayer: PlayerSymbol = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X")
    currentPlayer = "O";
  return currentPlayer;
}

//Determines the winner
function deriveWinner(gameBoard: Board): PlayerSymbol | undefined {
  let winner: PlayerSymbol | undefined;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol)
      winner = firstSquareSymbol;
  }
  return winner;
}

function App() {
  // State that stores all the turns that have been played so far
  const [players, setPlayers] = useState<Players>(PLAYERS);
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  //Deep copy of the array gameBoard and initial are separated array
  const gameBoard: Board = INITIAL_GAME_BOARD.map(row => [...row]);
  //Fill the array with the player historic
  for (const turn of gameTurns) {
    // turn = un coup dans la liste
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  const winner = deriveWinner(gameBoard);

  //Check boolean if the game is a draw return true if the condition is true
  const hasDraw = gameTurns.length === 9 && !winner;

  // Function that switches the active player after a move is made
  function handleActivePlayer(rowIndex: number, colIndex: number) {
    // Save the played turn and who played X or O
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns: GameTurn[] = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  //Reset the array turns and start a new game
  function resetGame() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" activeSymbol={activePlayer === "X"} setPlayers={setPlayers} />{/*return a boolean true or false is active or not*/}
          <Player initialName={PLAYERS.O} symbol="O" activeSymbol={activePlayer === "O"} setPlayers={setPlayers} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} resetGame={resetGame} players={players} />}
        <GameBoard onTriggerActivePlayer={handleActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
